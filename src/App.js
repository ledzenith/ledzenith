import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';

import './customStyle.scss';
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import WorkinProgress from "./components/WorkInProgress";

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/soon" element={<WorkinProgress/>}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
