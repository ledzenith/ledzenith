import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './customStyle.scss';
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import WorkinProgress from "./components/workInProgress/WorkInProgress";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/soon" element={<WorkinProgress/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
