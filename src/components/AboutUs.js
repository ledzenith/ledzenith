import "../styles/about-us.scss"
import aboutPg from "../assets/img/about-pg.png"
import { Link } from "react-router-dom";

const AboutUs = () => {
    return ( 
        <div id="about-section" className={"about-us" + ((window.innerWidth < 992) ? " flex-wrap gap-5" : "")}    >
            <h1>Illuminiamo i vostri desideri smart</h1>
            <h5 className="fst-italic">Sei alla ricerca di un modo per portare una nuova luce nella tua vita?</h5> 

            <div className={((window.innerWidth <= 992) ? "flex-wrap " : "") + "about-container d-flex justify-content-center"}>
                <div className="about-text px-3">
                    <p className="first-p">Ledzenith è qui per guidarti verso il futuro dell'illuminazione a <b>LED</b>.<br/>Siamo la tua destinazione per prodotti luminosi, <b>innovativi</b> ed <b>eco-sostenibili</b> che trasformeranno la tua <em>casa</em>, il tuo <em>ufficio</em> o il tuo <em>spazio commerciale</em> in un luogo di meravigliosa luminosità.</p>
                    {/* <p>Presso LedZenith, crediamo che ogni ambiente meriti una luce di <b>alta qualità</b>. I nostri prodotti sono progettati per offrire una luce <em>brillante</em>, <em>uniforme</em> e <em>duratura</em>. Dimentica i vecchi sistemi di illuminazione e abbraccia il futuro con i nostri LED efficienti che <em>risparmiano energia</em>.</p> */}
                    <div className="d-flex justify-content-center">
                        <Link to="/soon">Scopri di più</Link>
                    </div>
                </div>
                <div className="position-relative about-image d-flex">
                    <img src={aboutPg} alt="Illustrazione" className="about-image"/>
                </div>
            </div>
            
        </div>
     );
}
 
export default AboutUs;