import { useState } from "react";
// import testoSveglia from "../assets/Testi"
import BottoneUtility from "./Button";

    // Sezione che mostra l'utilità del prodotto ed il funzionamento
    // Sarà uno Slider con 2 sezioni 
    // 1- Img 3D prodotto(sx), testo(dx)
    // 2- Funzionamento video(center), ai lati(dx e sx del video) Bottoni fluttuanti che al click mostrano del testo 

const UtilitySection = () => {
    const [btnSvegliaHover, setBtnSvegliaHover] = useState(false)
    const [btnLuciHover, setBtnLuciHover] = useState(false)
    const [btnMusicaHover, setBtnMusicaHover] = useState(false)
    const [btnWirelessHover, setBtnWirelessHover] = useState(false)
    const [btnAppHover, setBtnAppHover] = useState(false)
    const [btnRisveglioHover, setBtnRisveglioHover] = useState(false)

    function handleBtnHover (name){
        if(name === "Sveglia"){
            setBtnSvegliaHover(true)
        } else
        if(name === "Luci Led"){
            setBtnLuciHover(true)
        } else
        if(name === "Musica"){
            setBtnMusicaHover(true)
        }
        if(name === "Ricarica Wireless"){
            setBtnWirelessHover(true)
        }
        if(name === "App"){
            setBtnAppHover(true)
        }
        if(name === "Simulazione Risveglio"){
            setBtnRisveglioHover(true)
        }
        
    }

    function handleBtnLeave (name){
        if(name === "Sveglia"){
            setBtnSvegliaHover(false)
        } else
        if(name === "Luci Led"){
            setBtnLuciHover(false)
        } else
        if(name === "Musica"){
            setBtnMusicaHover(false)
        }
        if(name === "Ricarica Wireless"){
            setBtnWirelessHover(false)
        }
        if(name === "App"){
            setBtnAppHover(false)
        }
        if(name === "Simulazione Risveglio"){
            setBtnRisveglioHover(false)
        }
    }

     
    return ( 
        <div id="mainCarousel" className="carousel slide carousel-fade">
            <div className="carousel-inner">

                <div className="carousel-item active">
                    {/* <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item d-block w-100" src="https://www.youtube.com/embed/GMGYo8GCEzI" alt="video prodotto" allowfullscreen/>
                    </div> */}
                    <BottoneUtility key={"sveglia"} 
                                    name={"Sveglia"} 
                                    hoverState={btnSvegliaHover}
                                    handleBtnHover={handleBtnHover}
                                    handleBtnLeave={handleBtnLeave}
                                    bgColor={"bg-color-sveglia"}
                                    shadowColor={"shadow-btn-sveglia"}/>

                    <BottoneUtility key={"luci"} 
                                    name={"Luci Led"}
                                    hoverState={btnLuciHover} 
                                    handleBtnHover={handleBtnHover} 
                                    handleBtnLeave={handleBtnLeave} 
                                    bgColor={"bg-color-luci"}
                                    shadowColor={"shadow-btn-luci"}/>

                    <BottoneUtility key={"musica"} 
                                    name={"Musica"}
                                    hoverState={btnMusicaHover} 
                                    handleBtnHover={handleBtnHover} 
                                    handleBtnLeave={handleBtnLeave} 
                                    bgColor={"bg-color-musica"}
                                    shadowColor={"shadow-btn-musica"}/>
                                    
                    <BottoneUtility key={"wireless"} 
                                    name={"Ricarica Wireless"}
                                    hoverState={btnWirelessHover} 
                                    handleBtnHover={handleBtnHover} 
                                    handleBtnLeave={handleBtnLeave} 
                                    bgColor={"bg-color-wireless"}
                                    shadowColor={"shadow-btn-wireless"}/>
                                    
                    <BottoneUtility key={"app"} 
                                    name={"App"}
                                    hoverState={btnAppHover} 
                                    handleBtnHover={handleBtnHover} 
                                    handleBtnLeave={handleBtnLeave} 
                                    bgColor={"bg-color-app"}
                                    shadowColor={"shadow-btn-app"}/>
                                    
                    <BottoneUtility key={"risveglio"} 
                                    name={"Simulazione Risveglio"}
                                    hoverState={btnRisveglioHover} 
                                    handleBtnHover={handleBtnHover} 
                                    handleBtnLeave={handleBtnLeave} 
                                    bgColor={"bg-color-risveglio"}
                                    shadowColor={"shadow-btn-risveglio"}/>
                                    

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