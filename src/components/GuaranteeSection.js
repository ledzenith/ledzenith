import "../styles/guarantee-section.scss"

const GuaranteeSection = () => {
    // Banner che contiene le immagini di garanzia(reso, spedizione gratuita, tempo di spedizione, etc..), 
    // al click delle immagini si apre un popup che mostra la descrizione della garanzia
    
    return ( 
        <>
        <div className="wrapper">
            <div className="carousel">
                <i class="bi bi-box2 fs-guarantee-icon"></i>
                <i class="bi bi-clock fs-guarantee-icon"></i>
                <i class="bi bi-truck fs-guarantee-icon"></i>
                <i class="bi bi-person-check fs-guarantee-icon"></i>
                <i class="bi bi-cash-coin fs-guarantee-icon"></i>
            </div>
        </div>
        </>
     );
}
 
export default GuaranteeSection;