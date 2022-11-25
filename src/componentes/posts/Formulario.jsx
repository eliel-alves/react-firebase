import { useContext } from 'react'
import Alerta from '../Alerta';
import PostsContext from './PostsContext';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar,  alerta } = useContext(PostsContext);

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">            
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold" id="exampleModalLabel">Post</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtID" className="form-label fw-bold">
                                    ID
                                </label>
                                <input
                                    type="text" disabled
                                    readOnly
                                    className="form-control"
                                    id="txtID"
                                    name="id"
                                    value={objeto.id}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtTitulo" className="form-label fw-bold mt-3">
                                    Título
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtTitulo"
                                    name="titulo"
                                    value={objeto.titulo}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtTexto" className="form-label fw-bold mt-3">
                                    Texto
                                </label>
                                <textarea 
                                    
                                    className="form-control"
                                    id="txtTexto"
                                    name="texto"
                                    value={objeto.texto}
                                    onChange={handleChange}
                                    required
                                />
                            </div>     
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success" >
                                Salvar  <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Formulario;