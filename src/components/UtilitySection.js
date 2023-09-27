import { useState } from "react";
import BottoneUtility from "./Button";

import '../styles/utility-section.scss';

import video from "../assets/video/videoProduct.mp4"
import topWire from "../assets/img/top-wire.png"
import midWire from "../assets/img/mid-wire.png"
import botWire from "../assets/img/bot-wire.png"

import topWireActiveLeft from "../assets/img/top-wire-active-left.png"
import midWireActiveLeft from "../assets/img/mid-wire-active-left.png"
import botWireActiveLeft from "../assets/img/bot-wire-active-left.png"

import topWireActiveRight from "../assets/img/top-wire-active-right.png"
import midWireActiveRight from "../assets/img/mid-wire-active-right.png"
import botWireActiveRight from "../assets/img/bot-wire-active-right.png"

import videoWire from "../assets/img/video-wire.png"
import videoWireActive from "../assets/img/video-wire-active.png"

import wire from "../assets/img/wire.png"

import {testoSveglia, testoApp, testoLuci, testoMusica, testoRisveglio, testoWireless} from "../assets/Testi";


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
    const [btnVideoHover, setBtnVideoHover] = useState(false)

    const [btnSvegliaClick, setBtnSvegliaClick] = useState(false)
    const [btnLuciClick, setBtnLuciClick] = useState(false)
    const [btnMusicaClick, setBtnMusicaClick] = useState(false)
    const [btnWirelessClick, setBtnWirelessClick] = useState(false)
    const [btnAppClick, setBtnAppClick] = useState(false)
    const [btnRisveglioClick, setBtnRisveglioClick] = useState(false)
    const [btnVideoClick, setBtnVideoClick] = useState(true)

    function handleBtnHover (id){
        if(id === "sveglia"){
            setBtnSvegliaHover(true)
        } else
        if(id === "luci"){
            setBtnLuciHover(true)
        } else
        if(id === "musica"){
            setBtnMusicaHover(true)
        }
        if(id === "wireless"){
            setBtnWirelessHover(true)
        }
        if(id === "app"){
            setBtnAppHover(true)
        }
        if(id === "risveglio"){
            setBtnRisveglioHover(true)
        } else
        if(id === "video"){
            setBtnVideoHover(true)
        } 
    }
    
    function handleBtnLeave (id){
        if(id === "sveglia"){
            setBtnSvegliaHover(false)
        } else
        if(id === "luci"){
            setBtnLuciHover(false)
        } else
        if(id === "musica"){
            setBtnMusicaHover(false)
        } else
        if(id === "wireless"){
            setBtnWirelessHover(false)
        } else
        if(id === "app"){
            setBtnAppHover(false)
        } else
        if(id === "risveglio"){
            setBtnRisveglioHover(false)
        } else
        if(id === "video"){
            setBtnVideoHover(false)
        } 

    }

    function handleBtnClick (id){
        if(id === "sveglia"){
            setBtnSvegliaClick(true); setBtnLuciClick(false); setBtnMusicaClick(false); setBtnWirelessClick(false); setBtnAppClick(false); setBtnRisveglioClick(false); setBtnVideoClick(false)
        } else
        if(id === "luci"){
            setBtnSvegliaClick(false); setBtnLuciClick(true); setBtnMusicaClick(false); setBtnWirelessClick(false); setBtnAppClick(false); setBtnRisveglioClick(false); setBtnVideoClick(false)
        } else
        if(id === "musica"){
            setBtnSvegliaClick(false); setBtnLuciClick(false); setBtnMusicaClick(true); setBtnWirelessClick(false); setBtnAppClick(false); setBtnRisveglioClick(false); setBtnVideoClick(false)
        } else
        if(id === "wireless"){
            setBtnSvegliaClick(false); setBtnLuciClick(false); setBtnMusicaClick(false); setBtnWirelessClick(true); setBtnAppClick(false); setBtnRisveglioClick(false); setBtnVideoClick(false)
        } else
        if(id === "app"){
            setBtnSvegliaClick(false); setBtnLuciClick(false); setBtnMusicaClick(false); setBtnWirelessClick(false); setBtnAppClick(true); setBtnRisveglioClick(false); setBtnVideoClick(false)
        } else
        if(id === "risveglio"){
            setBtnSvegliaClick(false); setBtnLuciClick(false); setBtnMusicaClick(false); setBtnWirelessClick(false); setBtnAppClick(false); setBtnRisveglioClick(true); setBtnVideoClick(false)
        } else
        if(id === "video"){
            setBtnSvegliaClick(false); setBtnLuciClick(false); setBtnMusicaClick(false); setBtnWirelessClick(false); setBtnAppClick(false); setBtnRisveglioClick(false); setBtnVideoClick(true)
        } 

    }

     
    return (          
                <div className="container-fluid bg-utility-custom bg-gradient position-relative">
                        <div className="row d-block d-lg-flex align-items-center white">
                                                
                            <div className="video-container order-2 col-6 d-flex flex-column justify-content-center align-items-center w-50 pt-video">
                                    <div className={ (btnSvegliaClick ? "border-sveglia" : btnLuciClick ? "border-luci" : btnMusicaClick ? "border-musica" : btnWirelessClick ? "border-wireless" : btnAppClick ? "border-app" : btnRisveglioClick ? "border-risveglio" : btnVideoClick ? "border-video" :  "") + 
                                                     " size-video-container border-2 rounded-1 ratio ratio-4x3 position-relative border-solid"}>

                                            <img className="position-absolute cable-top-l z-1 d-none d-lg-block" src={btnSvegliaClick ? topWireActiveLeft : topWire} alt="top left cable"></img>
                                            <img className="position-absolute cable-mid-l z-1 d-none d-lg-block" src={btnLuciClick ? midWireActiveLeft : midWire} alt="middle left cable"></img>
                                            <img className="position-absolute cable-bot-l z-1 d-none d-lg-block" src={btnMusicaClick ? botWireActiveLeft : botWire} alt="bottom left cable"></img>

                                            <img className="position-absolute cable-top-r z-1 d-none d-lg-block" src={btnWirelessClick ? topWireActiveRight : topWire} alt="top right cable"></img>
                                            <img className="position-absolute cable-mid-r z-1 d-none d-lg-block" src={btnAppClick ? midWireActiveRight : midWire} alt="middle right cable"></img>
                                            <img className="position-absolute cable-bot-r z-1 d-none d-lg-block" src={btnRisveglioClick ? botWireActiveRight : botWire} alt="bottom right cable"></img>

                                            <img className="position-absolute cable-video z-1 d-none d-lg-block" src={btnVideoClick ? videoWireActive : videoWire} alt="center low cable"></img>

                                            

                                            <p className={btnSvegliaClick ? "d-block f1-custom fw-normal lh-base" : "d-none"}>{testoSveglia}</p>
                                            <p className={btnLuciClick ? "d-block f1-custom fw-normal lh-base" : "d-none"}>{testoLuci}</p>
                                            <p className={btnMusicaClick ? "d-block f1-custom fw-normal lh-base" : "d-none"}>{testoMusica}</p>
                                            <p className={btnWirelessClick ? "d-block f1-custom fw-normal lh-base" : "d-none"}>{testoWireless}</p>
                                            <p className={btnAppClick ? "d-block f1-custom fw-normal lh-base" : "d-none"}>{testoApp}</p>
                                            <p className={btnRisveglioClick ? "d-block f1-custom fw-normal lh-base" : "d-none"}>{testoRisveglio}</p>
                                            {/* <iframe title="video product" className="p-3" src={video} allowFullScreen/> */}
                                            <video className={btnVideoClick ? "d-block position-relative object-fit-cover" : "d-none" } src={video} allowFullScreen autoPlay controls muted></video>
                                    </div>

                                <div className="mt-3 z-2 position-relative">
                                    
                                <img className="position-absolute cable0 cable-1 z-n1 d-block d-lg-none" src={btnVideoClick ? wire : wire} alt="cable"></img>   
                                <BottoneUtility key={"video"}
                                                id={"video"}
                                                name={"Mostra Video"} 
                                                hoverState={btnVideoHover}
                                                clickState={btnVideoClick}
                                                handleBtnHover={handleBtnHover}
                                                handleBtnLeave={handleBtnLeave}
                                                handleBtnClick={handleBtnClick}
                                                bgColor={"bg-color-video"}
                                                shadowColor={"shadow-btn-video"}/>
                                </div>
                            </div>

                            <div className="btn-group col d-flex flex-column order-1 btn-gap-y btn-px align-items-center">

                                <img className="position-absolute cable cable-2 z-1 d-block d-lg-none" src={btnVideoClick ? wire : wire} alt="cable"></img>
                                <BottoneUtility key={"sveglia"}
                                                id={"sveglia"} 
                                                name={"Sveglia"} 
                                                hoverState={btnSvegliaHover}
                                                clickState={btnSvegliaClick}
                                                handleBtnHover={handleBtnHover}
                                                handleBtnLeave={handleBtnLeave}
                                                handleBtnClick={handleBtnClick}
                                                bgColor={"bg-color-sveglia"}
                                                shadowColor={"shadow-btn-sveglia"}/>
                                                
                                <img className="position-absolute cable cable-3 z-1 d-block d-lg-none" src={btnVideoClick ? wire : wire} alt="cable"></img>
                                <BottoneUtility key={"luci"} 
                                                id={"luci"}
                                                name={"Luci Led"}
                                                hoverState={btnLuciHover} 
                                                clickState={btnLuciClick}
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave}
                                                handleBtnClick={handleBtnClick} 
                                                bgColor={"bg-color-luci"}
                                                shadowColor={"shadow-btn-luci"}/>

                                <img className="position-absolute cable cable-4 z-1 d-block d-lg-none" src={btnVideoClick ? wire : wire} alt="cable"></img>
                                <BottoneUtility key={"musica"} 
                                                id={"musica"}
                                                name={"Musica"}
                                                hoverState={btnMusicaHover} 
                                                clickState={btnMusicaClick}
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave}
                                                handleBtnClick={handleBtnClick} 
                                                bgColor={"bg-color-musica"}
                                                shadowColor={"shadow-btn-musica"}/>
                                            
                            </div>

                            <div className=" btn-group col d-flex flex-column order-3 btn-gap-y btn-px align-items-center">

                                <img className="position-absolute cable cable-2 z-1 d-block d-lg-none" src={btnVideoClick ? wire : wire} alt="cable"></img>
                                <BottoneUtility key={"wireless"}
                                                id={"wireless"} 
                                                name={"Ricarica Wireless"}
                                                hoverState={btnWirelessHover}
                                                clickState={btnWirelessClick} 
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave}
                                                handleBtnClick={handleBtnClick} 
                                                bgColor={"bg-color-wireless"}
                                                shadowColor={"shadow-btn-wireless"}/>

                                <img className="position-absolute cable cable-3 z-1 d-block d-lg-none" src={btnVideoClick ? wire : wire} alt="cable"></img>                 
                                <BottoneUtility key={"app"} 
                                                id={"app"} 
                                                name={"App"}
                                                hoverState={btnAppHover}
                                                clickState={btnAppClick} 
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave} 
                                                handleBtnClick={handleBtnClick}
                                                bgColor={"bg-color-app"}
                                                shadowColor={"shadow-btn-app"}/>

                                <img className="position-absolute cable cable-4 z-1 d-block d-lg-none" src={btnVideoClick ? wire : wire} alt="cable"></img>                
                                <BottoneUtility key={"risveglio"}
                                                id={"risveglio"}    
                                                name={"Simulazione Risveglio"}
                                                hoverState={btnRisveglioHover} 
                                                clickState={btnRisveglioClick}
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave} 
                                                handleBtnClick={handleBtnClick}
                                                bgColor={"bg-color-risveglio"}
                                                shadowColor={"shadow-btn-risveglio"}/>
                                            
                            </div>
                        </div>
                </div>
     );
}
 
export default UtilitySection;