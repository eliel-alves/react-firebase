import {useAuthState} from "react-firebase-hooks/auth";
import {auth, logout} from "../firebaseConfig";
import {useNavigate} from "react-router-dom";

const Perfil = () => {

    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    return(
        <div className="hero-container">
            <img src={user?.photoURL} className="avatar"/>
            <h3 className="fw-bold pt-2">{user?.displayName}</h3>
            <h5><i className="bi bi-envelope text-primary"></i> {user?.email}</h5>
            <p><strong>UID:</strong> {user?.uid}</p>

            <button className="btn btn-primary btn-lg mt-3" type="submit"
                onClick={() => {
                    logout();
                    navigate("/");
                }}>Logout <i className="bi bi-box-arrow-right"></i>
            </button>
        </div>
    );

}

export default Perfil;