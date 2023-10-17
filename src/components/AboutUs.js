import "../styles/about-us.scss"
import aboutImg from "../assets/img/about-image.svg"

const AboutUs = () => {
    return ( 
        <div id="about-section" className={"about-us d-flex justify-content-around p-5" + ((window.innerWidth < 992) ? " flex-wrap gap-5" : "")}    >
            <div className="about-text px-3">
                <h1 className="">Illuminiamo i vostri desideri smart</h1>
                <h3>Alla ricerca di un modo per portare una nuova luce nella tua vita?</h3> 
                <p>LedZenith è qui per guidarti verso il futuro dell'illuminazione a LED.<br/>Siamo la tua destinazione per prodotti luminosi, innovativi ed eco-sostenibili che trasformeranno la tua casa, il tuo ufficio o il tuo spazio commerciale in un luogo di meravigliosa luminosità.</p>
                <p>Presso LedZenith, crediamo che ogni ambiente meriti una luce di alta qualità. I nostri prodotti LED sono progettati per offrire una luce brillante, uniforme e duratura. Dimentica i vecchi sistemi di illuminazione e abbraccia il futuro con i nostri LED efficienti che risparmiano energia.</p>
                <a href="">
                    <span className="d-flex justify-content-center">Scopri di più</span>
                </a>
            </div>
            <div className="about-image d-flex align-items-center">
                <img src={aboutImg} alt="Illustrazione" className="about-image"/>
            </div>
        </div>
     );
}
 
export default AboutUs;