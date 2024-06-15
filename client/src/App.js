import logo from './logo.svg';
import './App.css';
import Homepage from "./pages/homepage";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
