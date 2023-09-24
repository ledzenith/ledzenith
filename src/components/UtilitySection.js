import { useState } from "react";
// import testoSveglia from "../assets/Testi"
import BottoneUtility from "./Button";

import video from "../assets/video/videoProduct.mp4"

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
    const [btnVideoClick, setBtnVideoClick] = useState(false)

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
            setBtnSvegliaClick(true)
        } else
        if(id === "luci"){
            setBtnLuciClick(true)
        } else
        if(id === "musica"){
            setBtnMusicaClick(true)
        } else
        if(id === "wireless"){
            setBtnWirelessClick(true)
        } else
        if(id === "app"){
            setBtnAppClick(true)
        } else
        if(id === "risveglio"){
            setBtnRisveglioClick(true)
        } else
        if(id === "video"){
            setBtnVideoClick(true)
        } 

    }

     
    return (          
                <div className="vw-100 vh-100 container-fluid bg-utility-custom bg-gradient d-flex align-items-center justify-content-center">
                        <div className="row d-block d-lg-flex align-items-center justify-content-cente white">
                            <div className="video-container order-2 col-6 d-flex flex-column justify-content-center align-items-center w-50 mt-video">
                                
                                <div className="position-relative">
                                    <div className="d-none d-lg-flex left-group-cavo flex-column">
                                        <div className="attacco-cavo"></div>
                                        <div className="attacco-cavo"></div>
                                        <div className="attacco-cavo"></div>
                                    </div>
                                    <div className="ratio ratio-4x3 min-width-video">
                                            {/* <iframe title="video product" className="p-3" src={video} allowFullScreen/> */}
                                            <video className="border border-white border-2 rounded-1 position-relative" src={video} allowFullScreen autoPlay controls muted></video>
                                    </div>
                                    <div className="d-none d-lg-flex right-group-cavo flex-column">
                                        <div className="attacco-cavo"></div>
                                        <div className="attacco-cavo"></div>
                                        <div className="attacco-cavo"></div>
                                    </div>
                                </div>

                                <div className="attacco-cavo rotate-90 attacco-b-pos"></div>
                                <div className="mt-3">
                                <BottoneUtility key={"video"}
                                                id={"video"}
                                                name={"Mostra Video"} 
                                                hoverState={btnVideoHover}
                                                handleBtnHover={handleBtnHover}
                                                handleBtnLeave={handleBtnLeave}
                                                bgColor={"bg-color-video"}
                                                shadowColor={"shadow-btn-video"}/>
                                </div>
                            </div>

                            <div className="btn-group col d-flex flex-column order-1 btn-gap-y btn-px lg-mb">
                                
                                <BottoneUtility key={"sveglia"}
                                                id={"sveglia"} 
                                                name={"Sveglia"} 
                                                hoverState={btnSvegliaHover}
                                                handleBtnHover={handleBtnHover}
                                                handleBtnLeave={handleBtnLeave}
                                                bgColor={"bg-color-sveglia"}
                                                shadowColor={"shadow-btn-sveglia"}/>

                                <BottoneUtility key={"luci"} 
                                                id={"luci"}
                                                name={"Luci Led"}
                                                hoverState={btnLuciHover} 
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave} 
                                                bgColor={"bg-color-luci"}
                                                shadowColor={"shadow-btn-luci"}/>

                                <BottoneUtility key={"musica"} 
                                                id={"musica"}
                                                name={"Musica"}
                                                hoverState={btnMusicaHover} 
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave} 
                                                bgColor={"bg-color-musica"}
                                                shadowColor={"shadow-btn-musica"}/>
                                            
                            </div>

                            <div className=" btn-group col d-flex flex-column order-3 btn-gap-y btn-px lg-mb">
                                <BottoneUtility key={"wireless"}
                                                id={"wireless"} 
                                                name={"Ricarica Wireless"}
                                                hoverState={btnWirelessHover} 
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave} 
                                                bgColor={"bg-color-wireless"}
                                                shadowColor={"shadow-btn-wireless"}/>
                                                
                                <BottoneUtility key={"app"} 
                                                id={"app"} 
                                                name={"App"}
                                                hoverState={btnAppHover} 
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave} 
                                                bgColor={"bg-color-app"}
                                                shadowColor={"shadow-btn-app"}/>
                                                
                                <BottoneUtility key={"risveglio"}
                                                id={"risveglio"}    
                                                name={"Simulazione Risveglio"}
                                                hoverState={btnRisveglioHover} 
                                                handleBtnHover={handleBtnHover} 
                                                handleBtnLeave={handleBtnLeave} 
                                                bgColor={"bg-color-risveglio"}
                                                shadowColor={"shadow-btn-risveglio"}/>
                                            
                            </div>
                        </div>
                </div>
     );
}
 
export default UtilitySection;