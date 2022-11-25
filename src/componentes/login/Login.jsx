import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Alerta from '../Alerta';
import './signin.css';
import { auth, signInWithGoogle } from '../../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';


function Login() {
    
    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    const acaoLogin = async e => {
        e.preventDefault();

        try {

        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate("/");
    }, [user, loading]);

    return (
        <div className="hero-container">
            <body className="text-center">
                <Alerta alerta={alerta} />
                <main className="form-signin">
                    <form onSubmit={acaoLogin}>
                        <button className="w-100 btn btn-lg btn-primary" type="submit"
                            onClick={signInWithGoogle}><i class="bi bi-google"></i> Fazer Login com Google
                        </button>
                    </form>
                </main>
            </body>
        </div>
    )

}

export default Login;