import { Link, useNavigate } from "react-router-dom";
import { logout, auth } from '../firebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth";

const Menu = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Firebase PWA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        
                        {user &&
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Manutenções
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/posts">Posts</Link></li>
                                    <li><Link className="dropdown-item" to="/disciplinas">Disciplinas</Link></li>
                                </ul>
                            </li>
                        }

                        {user &&
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/perfil">Perfil</Link>
                            </li>
                        }

                        {!user &&
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/login">Autenticar</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Menu;
