import { useState, useRef } from "react";
import BottoneUtility from "../../../components/Button";

import './utility-section.scss';

import video from "../../../assets/video/videoProduct.mp4"
import topWire from "../../../assets/img/top-wire.png"
import midWire from "../../../assets/img/mid-wire.png"
import botWire from "../../../assets/img/bot-wire.png"

import topWireActiveLeft from "../../../assets/img/top-wire-active-left.png"
import midWireActiveLeft from "../../../assets/img/mid-wire-active-left.png"
import botWireActiveLeft from "../../../assets/img/bot-wire-active-left.png"

import topWireActiveRight from "../../../assets/img/top-wire-active-right.png"
import midWireActiveRight from "../../../assets/img/mid-wire-active-right.png"
import botWireActiveRight from "../../../assets/img/bot-wire-active-right.png"

import videoWire from "../../../assets/img/video-wire.png"
import videoWireActive from "../../../assets/img/video-wire-active.png"

import wire from "../../../assets/img/wire.png"
import svegliaWire from "../../../assets/img/sveglia-wire.png"  
import luciWire from "../../../assets/img/luci-wire.png"  
import musicaWire from "../../../assets/img/musica-wire.png"  
import wirelessWire from "../../../assets/img/wireless-wire.png"  
import appWire from "../../../assets/img/app-wire.png"  
import risveglioWire from "../../../assets/img/risveglio-wire.png"  
import videoWireSimple from "../../../assets/img/video-wire-simple.png"  

import {testoSveglia, testoApp, testoLuci, testoMusica, testoRisveglio, testoWireless} from "../../../assets/Testi";


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

    const utilitySectionRef = useRef(null);

    function handleBtnHover (id){
        if(id === "sveglia"){
            setBtnSvegliaHover(true);
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
            setBtnSvegliaHover(false); setBtnLuciHover(false); setBtnMusicaHover(false); setBtnWirelessHover(false); setBtnAppHover(false); setBtnRisveglioHover(false); setBtnVideoHover(false)
        } else
        if(id === "luci"){
            setBtnSvegliaClick(false); setBtnLuciClick(true); setBtnMusicaClick(false); setBtnWirelessClick(false); setBtnAppClick(false); setBtnRisveglioClick(false); setBtnVideoClick(false)
            setBtnSvegliaHover(false); setBtnLuciHover(false); setBtnMusicaHover(false); setBtnWirelessHover(false); setBtnAppHover(false); setBtnRisveglioHover(false); setBtnVideoHover(false)
        } else
        if(id === "musica"){
            setBtnSvegliaClick(false); setBtnLuciClick(false); setBtnMusicaClick(true); setBtnWirelessClick(false); setBtnAppClick(false); setBtnRisveglioClick(false); setBtnVideoClick(false)
            setBtnSvegliaHover(false); setBtnLuciHover(false); setBtnMusicaHover(false); setBtnWirelessHover(false); setBtnAppHover(false); setBtnRisveglioHover(false); setBtnVideoHover(false)
        } else
        if(id === "wireless"){
            setBtnSvegliaClick(false); setBtnLuciClick(false); setBtnMusicaClick(false); setBtnWirelessClick(true); setBtnAppClick(false); setBtnRisveglioClick(false); setBtnVideoClick(false)
            setBtnSvegliaHover(false); setBtnLuciHover(false); setBtnMusicaHover(false); setBtnWirelessHover(false); setBtnAppHover(false); setBtnRisveglioHover(false); setBtnVideoHover(false)
        } else
        if(id === "app"){
            setBtnSvegliaClick(false); setBtnLuciClick(false); setBtnMusicaClick(false); setBtnWirelessClick(false); setBtnAppClick(true); setBtnRisveglioClick(false); setBtnVideoClick(false)
            setBtnSvegliaHover(false); setBtnLuciHover(false); setBtnMusicaHover(false); setBtnWirelessHover(false); setBtnAppHover(false); setBtnRisveglioHover(false); setBtnVideoHover(false)
        } else
        if(id === "risveglio"){
            setBtnSvegliaClick(false); setBtnLuciClick(false); setBtnMusicaClick(false); setBtnWirelessClick(false); setBtnAppClick(false); setBtnRisveglioClick(true); setBtnVideoClick(false)
            setBtnSvegliaHover(false); setBtnLuciHover(false); setBtnMusicaHover(false); setBtnWirelessHover(false); setBtnAppHover(false); setBtnRisveglioHover(false); setBtnVideoHover(false)
        } else
        if(id === "video"){
            setBtnSvegliaClick(false); setBtnLuciClick(false); setBtnMusicaClick(false); setBtnWirelessClick(false); setBtnAppClick(false); setBtnRisveglioClick(false); setBtnVideoClick(true)
            setBtnSvegliaHover(false); setBtnLuciHover(false); setBtnMusicaHover(false); setBtnWirelessHover(false); setBtnAppHover(false); setBtnRisveglioHover(false); setBtnVideoHover(false)
        } 
        utilitySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    function handleBgColor(id){
        let bgColor = ""
        if(window.innerWidth < 992){
            if(id === "sveglia"){
                bgColor =  btnLuciClick ? "bg-color-luci" : btnMusicaClick ? "bg-color-musica" : btnWirelessClick ? "bg-color-wireless" : btnAppClick ? "bg-color-app" : btnRisveglioClick ? "bg-color-risveglio" : `bg-color-${id}`
                if(btnSvegliaClick){
                    setBtnVideoHover(true); 
                } 
            } else
            if(id === "luci"){
                bgColor = btnMusicaClick ? "bg-color-musica" : btnWirelessClick ? "bg-color-wireless" : btnAppClick ? "bg-color-app" : btnRisveglioClick ? "bg-color-risveglio" : `bg-color-${id}`
                if(btnLuciClick){
                    setBtnVideoHover(true); setBtnSvegliaHover(true); 
                }
            } else
            if(id === "musica"){
                bgColor = btnWirelessClick ? "bg-color-wireless" : btnAppClick ? "bg-color-app" : btnRisveglioClick ? "bg-color-risveglio" : `bg-color-${id}`
                if(btnMusicaClick){
                    setBtnVideoHover(true); setBtnSvegliaHover(true); setBtnLuciHover(true); 
                }
            } else
            if(id === "wireless"){
                bgColor = btnAppClick ? "bg-color-app" : btnRisveglioClick ? "bg-color-risveglio" : `bg-color-${id}`
                if(btnWirelessClick){
                    setBtnVideoHover(true); setBtnSvegliaHover(true); setBtnLuciHover(true); setBtnMusicaHover(true); 
                }    
            } else
            if(id === "app"){
                bgColor = btnRisveglioClick ? "bg-color-risveglio" : `bg-color-${id}`
                if(btnAppClick){
                    setBtnVideoHover(true); setBtnSvegliaHover(true); setBtnLuciHover(true); setBtnMusicaHover(true); setBtnWirelessHover(true); 
                }    
            } else
            if(id === "risveglio"){
                bgColor = `bg-color-${id}`
                if(btnRisveglioClick){
                    setBtnVideoHover(true); setBtnSvegliaHover(true); setBtnLuciHover(true); setBtnMusicaHover(true); setBtnWirelessHover(true); setBtnAppHover(true); 
                }    
            } else
            if(id === "video"){
                bgColor = btnSvegliaClick ? "bg-color-sveglia" : btnLuciClick ? "bg-color-luci" : btnMusicaClick ? "bg-color-musica" : btnWirelessClick ? "bg-color-wireless" : btnAppClick ? "bg-color-app" : btnRisveglioClick ? "bg-color-risveglio" : `bg-color-${id}`
            }
            return bgColor 

        } else{return `bg-color-${id}`}
    }
     
    return (          
                <div ref={utilitySectionRef} className="container-fluid bg-utility-custom position-relative">
                        <div className="utility-text">
                            <h1 className="text-white">L'innovazione sotto forma di <span className={ (btnSvegliaClick ? "text-color-sveglia text-shadow-title" : btnLuciClick ? "text-color-luci text-shadow-title" : btnMusicaClick ? "text-color-musica text-shadow-title" : btnWirelessClick ? "text-color-wireless text-shadow-title" : btnAppClick ? "text-color-app text-shadow-title" : btnRisveglioClick ? "text-color-risveglio text-shadow-title" : btnVideoClick ? " text-color-video text-shadow-title" :  "")}>Led</span> è arrivata!</h1>
                            <h5 className="px-5 fst-italic text-light">Scopri <span className="text-shadow-title"><span className={ (btnSvegliaClick ? "text-color-sveglia" : btnLuciClick ? "text-color-luci" : btnMusicaClick ? "text-color-musica" : btnWirelessClick ? "text-color-wireless" : btnAppClick ? "text-color-app" : btnRisveglioClick ? "text-color-risveglio" : btnVideoClick ? " text-color-video" :  "")}>Led</span>zenith</span> e tutte le sue funzionalità</h5>
                        </div>
                        <div  id="utility-section" className="utility-container row d-block d-lg-flex align-items-center white">
                            <div className={((window.innerWidth > 992) ? "vh-100 pb-video " : "pt-video ") + "video-container order-2 col-6 d-flex flex-column justify-content-center align-items-center w-50"}>
                                    <div className={ (btnSvegliaClick ? "border-sveglia shadow-btn-sveglia" : btnLuciClick ? "border-luci shadow-btn-luci" : btnMusicaClick ? "border-musica shadow-btn-musica" : btnWirelessClick ? "border-wireless shadow-btn-wireless" : btnAppClick ? "border-app shadow-btn-app" : btnRisveglioClick ? "border-risveglio shadow-btn-risveglio" : btnVideoClick ? "border-video shadow-btn-video" :  "") + 
                                                     " size-video-container rounded-1 ratio ratio-4x3 position-relative"}>

                                            <img className="position-absolute cable-top-l z-1 d-none d-lg-block" src={btnSvegliaClick ? topWireActiveLeft : topWire} alt="top left cable"></img>
                                            <img className="position-absolute cable-mid-l z-1 d-none d-lg-block" src={btnLuciClick ? midWireActiveLeft : midWire} alt="middle left cable"></img>
                                            <img className="position-absolute cable-bot-l z-1 d-none d-lg-block" src={btnMusicaClick ? botWireActiveLeft : botWire} alt="bottom left cable"></img>

                                            <img className="position-absolute cable-top-r z-1 d-none d-lg-block" src={btnWirelessClick ? topWireActiveRight : topWire} alt="top right cable"></img>
                                            <img className="position-absolute cable-mid-r z-1 d-none d-lg-block" src={btnAppClick ? midWireActiveRight : midWire} alt="middle right cable"></img>
                                            <img className="position-absolute cable-bot-r z-1 d-none d-lg-block" src={btnRisveglioClick ? botWireActiveRight : botWire} alt="bottom right cable"></img>

                                            <img className="position-absolute cable-video z-1 d-none d-lg-block" src={btnVideoClick ? videoWireActive : videoWire} alt="center low cable"></img>

                                            
                                            <div className="text-container px-3">
                                                <p className={btnSvegliaClick ? "d-block f1-custom fw-normal lh-base" : "d-none"}>{testoSveglia}</p>
                                                <p className={btnLuciClick ? "d-block f1-custom fw-normal lh-base" : "d-none"}>{testoLuci}</p>
                                                <p className={btnMusicaClick ? "d-block f1-custom fw-normal lh-base" : "d-none"}>{testoMusica}</p>
                                                <p className={btnWirelessClick ? "d-block f1-custom fw-normal lh-base" : "d-none"}>{testoWireless}</p>
                                                <p className={btnAppClick ? "d-block f1-custom fw-normal lh-base" : "d-none"}>{testoApp}</p>
                                                <p className={btnRisveglioClick ? "d-block f1-custom fw-normal lh-base" : "d-none"}>{testoRisveglio}</p>
                                            </div>
                                            {/* <iframe title="video product" className="p-3" src={video} allowFullScreen/> */}
                                            <video className={btnVideoClick ? "d-block position-relative object-fit-cover" : "d-none" } src={video} allowFullScreen autoPlay controls muted loop></video>
                                    </div>

                                <div className="container-video z-2 d-flex justify-content-center flex-column align-items-center">
                                    
                                    <img className="cable z-n1 d-block d-lg-none" 
                                        src={btnVideoClick ? videoWireSimple : btnSvegliaClick ? svegliaWire : btnLuciClick ? luciWire : btnMusicaClick ? musicaWire : btnWirelessClick ? wirelessWire : btnAppClick ? appWire : btnRisveglioClick ? risveglioWire : wire} alt="cable"></img>   
                                    <BottoneUtility key={"video"}
                                                    id={"video"}
                                                    name={(window.innerWidth < 992) ? <span><i className="bi bi-play-circle-fill fs-6 me-2"></i>Mostra Video</span> : (btnVideoHover || btnVideoClick) ? "Mostra Video" : <i className="bi bi-play-circle-fill fs-6"></i>} 
                                                    hoverState={btnVideoHover}
                                                    clickState={btnVideoClick}
                                                    handleBtnHover={handleBtnHover}
                                                    handleBtnLeave={handleBtnLeave}
                                                    handleBtnClick={handleBtnClick}
                                                    handleBgColor={handleBgColor}
                                                    bgColor={"bg-color-video"}
                                                    shadowColor={"shadow-btn-video"}/>
                                </div>
                            </div>

                            <div className="btn-group col d-flex flex-column order-1 btn-gap-y btn-px align-items-center">

                                <img className="cable z-1 d-block d-lg-none" 
                                     src={btnSvegliaClick ? svegliaWire : btnLuciClick ? luciWire : btnMusicaClick ? musicaWire : btnWirelessClick ? wirelessWire : btnAppClick ? appWire : btnRisveglioClick ? risveglioWire : wire} alt="cable"></img>
                                <BottoneUtility key={"sveglia"}
                                                id={"sveglia"} 
                                                name={(window.innerWidth < 992) ? <span><i className="bi bi-alarm fs-6 me-2"></i>Sveglia</span> : (btnSvegliaHover || btnSvegliaClick) ? "Sveglia" : <i className="bi bi-alarm fs-6"></i>} 
                                                hoverState={btnSvegliaHover}
                                                clickState={btnSvegliaClick}
                                                handleBtnHover={handleBtnHover}
                                                handleBtnLeave={handleBtnLeave}
                                                handleBtnClick={handleBtnClick}
                                                handleBgColor={handleBgColor}
                                                bgColor={"bg-color-sveglia"}
                                                shadowColor={"shadow-btn-sveglia"}/>
                                                
                                <img className="cable z-1 d-block d-lg-none" 
                                     src={btnLuciClick ? luciWire : btnMusicaClick ? musicaWire : btnWirelessClick ? wirelessWire : btnAppClick ? appWire : btnRisveglioClick ? risveglioWire : wire} alt="cable"></img>
                                <BottoneUtility key={"luci"} 
                                                id={"luci"}
                                                name={(window.innerWidth < 992) ? <span><i className="bi bi-lightbulb fs-6 me-2"></i>Led</span> : (btnLuciHover || btnLuciClick) ? "Led" : <i className="bi bi-lightbulb fs-6"></i>}
                                                hoverState={btnLuciHover} 
                                                clickState={btnLuciClick}
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave}
                                                handleBtnClick={handleBtnClick}
                                                handleBgColor={handleBgColor} 
                                                bgColor={"bg-color-luci"}
                                                shadowColor={"shadow-btn-luci"}/>

                                <img className="cable z-1 d-block d-lg-none" 
                                     src={btnMusicaClick ? musicaWire : btnWirelessClick ? wirelessWire : btnAppClick ? appWire : btnRisveglioClick ? risveglioWire : wire} alt="cable"></img>
                                <BottoneUtility key={"musica"} 
                                                id={"musica"}
                                                name={(window.innerWidth < 992) ? <span><i className="bi bi-music-note-beamed fs-6 me-2"></i>Musica</span> : (btnMusicaHover || btnMusicaClick) ? "Musica" : <i className="bi bi-music-note-beamed fs-6"></i>}
                                                hoverState={btnMusicaHover} 
                                                clickState={btnMusicaClick}
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave}
                                                handleBtnClick={handleBtnClick} 
                                                handleBgColor={handleBgColor}
                                                bgColor={"bg-color-musica"}
                                                shadowColor={"shadow-btn-musica"}/>
                                            
                            </div>

                            <div className=" btn-group col d-flex flex-column order-3 btn-gap-y btn-px align-items-center">

                                <img className="cable z-1 d-block d-lg-none" 
                                     src={btnWirelessClick ? wirelessWire : btnAppClick ? appWire : btnRisveglioClick ? risveglioWire : wire} alt="cable"></img>
                                <BottoneUtility key={"wireless"}
                                                id={"wireless"} 
                                                name={(window.innerWidth < 992) ? <span><i className="bi bi-wifi fs-6 me-2"></i>Wireless</span> : (btnWirelessHover || btnWirelessClick) ? "Wireless" : <i className="bi bi-wifi fs-6"></i>}
                                                hoverState={btnWirelessHover}
                                                clickState={btnWirelessClick} 
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave}
                                                handleBtnClick={handleBtnClick} 
                                                handleBgColor={handleBgColor}
                                                bgColor={"bg-color-wireless"}
                                                shadowColor={"shadow-btn-wireless"}/>

                                <img className="cable z-1 d-block d-lg-none" 
                                     src={btnAppClick ? appWire : btnRisveglioClick ? risveglioWire : wire} alt="cable"></img>                 
                                <BottoneUtility key={"app"} 
                                                id={"app"} 
                                                name={(window.innerWidth < 992) ? <span><i className="bi bi-google-play fs-6 me-2"></i>App</span> : (btnAppHover || btnAppClick) ? "App" : <i className="bi bi-google-play fs-6"></i>}
                                                hoverState={btnAppHover}
                                                clickState={btnAppClick} 
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave} 
                                                handleBtnClick={handleBtnClick}
                                                handleBgColor={handleBgColor}
                                                bgColor={"bg-color-app"}
                                                shadowColor={"shadow-btn-app"}/>

                                <img className="cable z-1 d-block d-lg-none" 
                                     src={btnRisveglioClick ? risveglioWire : wire} alt="cable"></img>                
                                <BottoneUtility key={"risveglio"}
                                                id={"risveglio"}   
                                                name={(window.innerWidth < 992) ? <span><i className="bi bi-heart-fill fs-6 me-2"></i>Risveglio</span> :  (btnRisveglioHover || btnRisveglioClick) ? "Risveglio" : <i className="bi bi-heart-fill fs-6"></i>}
                                                hoverState={btnRisveglioHover} 
                                                clickState={btnRisveglioClick}
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave} 
                                                handleBtnClick={handleBtnClick}
                                                handleBgColor={handleBgColor}
                                                bgColor={"bg-color-risveglio"}
                                                shadowColor={"shadow-btn-risveglio"}/>
                                            
                            </div>
                        </div>
                </div>
     );
}
 
export default UtilitySection;