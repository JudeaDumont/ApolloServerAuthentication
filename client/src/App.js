import logo from './logo.svg';
import './App.css';
import Homepage from "./pages/homepage";
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/navbar";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
    return (
        <div>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
