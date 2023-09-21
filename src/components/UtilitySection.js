import { useState } from "react";
import testoSveglia from "../assets/Testi"
import BottoneUtility from "./Button";

    // Sezione che mostra l'utilità del prodotto ed il funzionamento
    // Sarà uno Slider con 2 sezioni 
    // 1- Img 3D prodotto(sx), testo(dx)
    // 2- Funzionamento video(center), ai lati(dx e sx del video) Bottoni fluttuanti che al click mostrano del testo 

const UtilitySection = () => {
    const [btnSvegliaHover, setBtnSvegliaHover] = useState(false)

    const handleBtnHover = () =>{
        setBtnSvegliaHover(true)
        
    }
    const handleBtnLeave = () =>{
        setBtnSvegliaHover(false)
    }

     
    return ( 
        <div id="mainCarousel" className="carousel slide carousel-fade">
            <div className="carousel-inner">

                <div className="carousel-item active">
                    {/* <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item d-block w-100" src="https://www.youtube.com/embed/GMGYo8GCEzI" alt="video prodotto" allowfullscreen/>
                    </div> */}
                    <BottoneUtility name={"Sveglia"} hoverState={btnSvegliaHover} handleBtnHover={handleBtnHover} handleBtnLeave={handleBtnLeave}/>
                    <p>{testoSveglia}</p>
                </div>


                <div className="carousel-item">
                    <h1> Elemento Carosello </h1>
                </div>

            </div>


            {/* <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#mainCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#mainCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button> */}

        </div>
     );
}
 
export default UtilitySection;