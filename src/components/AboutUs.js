import "../styles/about-us.scss"
import aboutImg from "../assets/img/about-image.svg"

const AboutUs = () => {
    return ( 
        <div id="about-section" className={"about-us d-flex justify-content-around" + ((window.innerWidth < 992) ? " flex-wrap gap-5" : "")}    >
            <div className={"about-text pt-3" + ((window.innerWidth > 992) ? " pe-5" : "")}>
                <h1>Illuminiamo i vostri desideri smart</h1>
                <h5 className="fst-italic">Alla ricerca di un modo per portare una nuova luce nella tua vita?</h5> 
                <p className="first-p">Ledzenith è qui per guidarti verso il futuro dell'illuminazione a <b>LED</b>.<br/>Siamo la tua destinazione per prodotti luminosi, <b>innovativi</b> ed <b>eco-sostenibili</b> che trasformeranno la tua <em>casa</em>, il tuo <em>ufficio</em> o il tuo <em>spazio commerciale</em> in un luogo di meravigliosa luminosità.</p>
                {/* <p>Presso LedZenith, crediamo che ogni ambiente meriti una luce di <b>alta qualità</b>. I nostri prodotti sono progettati per offrire una luce <em>brillante</em>, <em>uniforme</em> e <em>duratura</em>. Dimentica i vecchi sistemi di illuminazione e abbraccia il futuro con i nostri LED efficienti che <em>risparmiano energia</em>.</p> */}
                <div className="d-flex justify-content-center">
                    <a href="">Scopri di più</a>
                </div>
            </div>
            <div className="about-image d-flex align-items-center">
                <img src={aboutImg} alt="Illustrazione" className="about-image"/>
            </div>
        </div>
     );
}
 
export default AboutUs;