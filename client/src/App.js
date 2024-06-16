import logo from './logo.svg';
import './App.css';
import Homepage from "./pages/homepage";
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/navbar";
import Register from "./pages/register";

function App() {
    return (
        <div>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/login" element={<Homepage/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
