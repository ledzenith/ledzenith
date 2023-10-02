import { useState } from "react";
import "../styles/guarantee-section.scss"
import { useRef } from "react";

const GuaranteeSection = () => {
    // Banner che contiene le immagini di garanzia(reso, spedizione gratuita, tempo di spedizione, etc..), 
    // al click delle immagini si apre un popup che mostra la descrizione della garanzia
    const [expand, setExpand] = useState(false)
    const carouselRef = useRef(null);

    function handleExpansion() {
        setExpand(!expand)
        carouselRef.current.scrollTop = 0;
    }

    return ( 
        <>
        <div className="wrapper bg-light">
            <h2 className="text-center p-4 text-uppercase title-custom fs-1">Scopri i nostri servizi</h2>
            <div ref={carouselRef} className={`carousel bg-light ${expand ? "expand" : "gradient-guarantee" }`}>
                        <div class="icon-container">
                            <div class="box">
                                <i className="bi bi-box2 fs-guarantee-icon"></i> 
                                <h5>Politica di reso</h5>
                            </div>
                        </div>
                        <div class="icon-container">
                            <div class="box">
                                <i className="bi bi-clock fs-guarantee-icon"></i>
                                <h5>Tempi di spedizione</h5>
                            </div>
                        </div>
                        <div class="icon-container">
                            <div class="box">
                                <i className="bi bi-truck fs-guarantee-icon"></i>
                                <h5>Spedizioni <br></br>gratuite</h5>
                            </div>
                        </div>
                        <div class="icon-container">
                            <div class="box">
                                <i className="bi bi-person-check fs-guarantee-icon"></i>
                                <h5>Servizio clienti</h5>
                            </div>
                        </div>
                        <div class="icon-container">
                            <div class="box">
                                <i className="bi bi-cash-coin fs-guarantee-icon"></i>
                                <h5>Metodi di pagamento</h5>
                            </div>
                        </div>
                        <div class="icon-container">
                            <div class="invisible-box d-lg-none"><i></i></div>
                        </div>
            </div>
            <span className="expander d-flex justify-content-center align-items-center fw-bolder fs-6 d-lg-none"> <u onClick={() => handleExpansion()}> {expand ? "riduci": "espandi"} </u> </span>
        </div>
        </>
     );
}
 
export default GuaranteeSection;