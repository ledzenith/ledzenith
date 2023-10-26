import { useState } from 'react';
import '../styles/upper-menu.scss';

const UpperMenu = ({isScrolling, isMouseTop}) => {
    // Questo sarà il menu superiore dell' Homepage con i seguenti elementi:
    // 1- Logo, 2- Promo, 3- Prodotti, 4- Servizio Clienti, 5- Img Carrello
    const [isHover, setIsHover] = useState(false)

    function handleHover(){
        setIsHover(true)
    }
    function handleLeave(){
        setIsHover(false)
    }

    return ( 
        <nav onMouseOver={handleHover} onMouseLeave={handleLeave} className={"navbar navbar-expand-lg bg-nav-gradient border-bottom border-body opacity-75 "+ ((isScrolling || isHover || isMouseTop) ? " d-block fixed-top" : " d-none")} data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-3" href="#utility-section">LedZenith</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav gap-4">
                        <li className="nav-item">
                            <a className="nav-link" href="#about-section">Chi Siamo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#product-section">Prodotti</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#guarantee-section">Servizi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#customer-section">Assistenza</a>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link p-0 cursor-pointer"><i className="bi bi-cart fs-4 p-1"></i></div>
                            {/* aggiungere modale entrante da destra per il carrello */}
                        </li>
                    </ul>
                </div>

            </div>
        </nav>   
     );
}
 
export default UpperMenu;