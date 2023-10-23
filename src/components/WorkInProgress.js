import { useEffect, useState } from "react";
import workInProgress from "../assets/img/work-in-progress.jpg"
import "../styles/work-in-progress.scss"
import { Link } from "react-router-dom";

const WorkinProgress = () => {
    const [point, setPoint] = useState([])

    useEffect(() => {

        const interval = setInterval(() => {
            
            if (point.length === 3){
                setPoint([]);
            } else {
                setPoint(newArr => [...newArr, "."]);
            }
            }, 1000);

        return () => {
            clearInterval(interval);
        };

      }, [point]);

    
    return ( 
        <div className="position-relative vh-100 vw-100 work-in-progress d-flex justify-content-center align-items-center flex-column gap-4">
            <img className="img-fluid wip-image" src={workInProgress} alt="work in progress" />
            <div className="text-wip-container">
                <h1>Work In Progress{point}</h1>
                <div className="d-flex justify-content-center">
                    <Link to="/">Torna Alla Home</Link>
                </div>
            </div>
        </div>
     );
}
 
export default WorkinProgress;