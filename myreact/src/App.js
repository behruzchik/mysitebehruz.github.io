import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;