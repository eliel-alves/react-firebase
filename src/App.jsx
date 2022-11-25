import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './componentes/Menu'
import Home from './componentes/Home'
import Posts from './componentes/posts/Posts'
import Disciplinas from "./componentes/disciplinas/Disciplinas";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './componentes/login/Login'
import Perfil from "./componentes/Perfil";

function App() {
    return (
        <Router>
            <Menu/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/posts" element={<Posts/>}/>
                <Route exact path="/perfil" element={<Perfil/>}/>
                <Route exact path="/disciplinas" element={<Disciplinas/>}/>
                <Route exact path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    );
}

export default App;