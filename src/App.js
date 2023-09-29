import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';

import './customStyle.scss';
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
  );
}

export default App;
