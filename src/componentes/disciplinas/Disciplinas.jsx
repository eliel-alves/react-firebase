import { useState, useEffect } from 'react';
import Tabela from './Tabela';
import DisciplinasContext from './DisciplinasContext';
import Formulario from './Formulario';
import { auth, db } from '../../firebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, addDoc, collection, query, onSnapshot, updateDoc, deleteDoc, where } from "firebase/firestore";


function Disciplinas() {


    const [user, loading, error] = useAuthState(auth);
    const [listaObjetos, setListaObjetos] = useState([]);
    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [objeto, setObjeto] = useState({
        id: "", nome: "", descricao: "", sigla: ""
    });

    const novoObjeto = () => {
        setObjeto({
            id: 0, nome: "", descricao: "", sigla: ""
        });
    }

    useEffect(() => {
        if (user?.uid != null) {
            const colRef = collection(db, "disciplinas");
            const q = query(colRef);

            onSnapshot(q, (querySnapshot) => {
                setListaObjetos(querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    nome: doc.data().nome,
                    descricao: doc.data().descricao,
                    sigla: doc.data().sigla
                })));
            });
        }
    }, [user]);

    const [editar, setEditar] = useState(false);

    const acaoCadastrar = async (e) => {       
        e.preventDefault();

        if (editar) {
            try {
                const disciplinaDocRef = doc(db, 'disciplinas', objeto.id);
                await updateDoc(disciplinaDocRef, {
                    nome: objeto.nome,
                    descricao: objeto.descricao,
                    sigla: objeto.sigla
                });

                setAlerta({ status: "success", message: "Disciplina atualizada com sucesso" });
            } catch (err) {
                setAlerta({ status: "error", message: "Erro ao atualizar a Disciplina:" + err });
            }
        } else { // novo 
            try {
                addDoc(collection(db, 'disciplinas'), {
                    nome: objeto.nome,
                    descricao: objeto.descricao,
                    sigla: objeto.sigla
                }).then(function (docRef) {
                    setObjeto({ ...objeto, id: docRef.id });
                });

                setEditar(true);
                setAlerta({ status: "success", message: "Disciplina criada com sucesso" });
            } catch (err) {
                setAlerta({ status: "error", message: "Erro ao criar a Disciplina:" + err });
            }
        }
    };

    const acaoRemover = async (objeto) => {
        if (window.confirm("Remover este objeto?")) {      
            try {
                const disciplinaDocRef = doc(db, 'disciplinas', objeto.id);
                await deleteDoc(disciplinaDocRef);

                setAlerta({ status: "success", message: "Disciplina removido com sucesso!" });
            } catch (err) {
                setAlerta({ status: "error", message: "Erro ao  remover a Disciplina: " + err });
            }

        }
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    };

    return (
        <DisciplinasContext.Provider value={
            {
                listaObjetos, setListaObjetos, acaoRemover,
                alerta, setAlerta,
                objeto, setObjeto,
                editar, setEditar,
                acaoCadastrar, handleChange, novoObjeto
            }}>
            <Tabela />
            <Formulario />
        </DisciplinasContext.Provider>
    );
}

export default Disciplinas;