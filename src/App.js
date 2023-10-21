import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';

import './customStyle.scss';
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import WorkinProgress from "./components/WorkInProgress";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/soon" element={<WorkinProgress/>}/>
        </Routes>
      </Router>
  );
}

export default App;
