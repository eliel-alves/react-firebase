import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, onSnapshot } from "firebase/firestore";

const Home = () => {

    const [listaObjetos, setListaObjetos] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'disciplinas'));

        onSnapshot(q, (querySnapshot) => {
            setListaObjetos(querySnapshot.docs.map(doc => ({
                id: doc.id,
                nome: doc.data().nome,
                descricao: doc.data().descricao,
                sigla: doc.data().sigla
            })));
        });

    }, []);

    return (
        <div className="p-5">
            <h1 className="fw-bold">Trabalho PWA - Firebase</h1>

            <div className="row pt-4">
                {listaObjetos.length === 0 && <h2>Nenhuma disciplina cadastrada</h2>}
                {listaObjetos.length > 0 && (
                    
                    listaObjetos.map(objeto => (
                        <div className="col-sm-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="badge bg-primary">{objeto.sigla}</h5>
                                    <h5 className="card-title fw-bold">{objeto.nome}</h5>
                                    <p className="card-text text-muted">{objeto.descricao}</p>
                                </div>
                            </div>
                        </div>
                    ))
                
                )}
            </div>
        </div>
    )
};

export default Home;