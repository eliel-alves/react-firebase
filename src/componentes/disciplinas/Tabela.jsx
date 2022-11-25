import { useContext } from 'react'
import Alerta from '../Alerta';
import DisciplinasContext from './DisciplinasContext';

const Tabela = () => {

    const { listaObjetos, acaoRemover, alerta, setObjeto, setEditar, setAlerta, novoObjeto } = useContext(DisciplinasContext);

    return (
        <div className="p-5">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="fw-bold">Disciplinas</h1>
                <Alerta alerta={alerta} />
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                    onClick={() => {
                        novoObjeto();
                        setEditar(false);
                        setAlerta({ status: "", message: "" });
                    }}>
                    Novo <i className="bi bi-file-earmark-plus"></i>
                </button>
            </div>
            
            <div className="pt-4">
                {listaObjetos.length === 0 && <h2>Nenhum registro encontrado</h2>}
                {listaObjetos.length > 0 && (
                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th scope="col" width="17%">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Sigla</th>
                                    <th scope="col" style={{ textAlign: 'center' }}>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaObjetos.map(objeto => (
                                    <tr key={objeto.id}>
                                        <td>{objeto.id}</td>
                                        <td>{objeto.nome}</td>
                                        <td>{objeto.descricao}</td>
                                        <td>{objeto.sigla}</td>
                                        <td align="center">
                                            <button className="btn btn-info me-2"
                                                data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                                onClick={() => {
                                                    setObjeto(objeto);
                                                    setEditar(true);
                                                    setAlerta({ status: "", message: "" });
                                                }}>
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button className="btn btn-danger" title="Remover"
                                                onClick={() => { acaoRemover(objeto); }}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );

}

export default Tabela;
