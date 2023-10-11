import { useState } from 'react';
import '../styles/navbar.scss';

const UpperMenu = ({isScrolling}) => {
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
        <nav onMouseOver={handleHover} onMouseLeave={handleLeave} class={"navbar navbar-expand-lg bg-nav-gradient border-bottom border-body fixed-top " + ((isScrolling || isHover) ? "d-block" : " d-none")} data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand ms-3" href="#">LedZenith</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav gap-4">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Promo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Prodotti</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Servizi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="#"><i class="bi bi-cart fs-4 p-1"></i></a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>   
     );
}
 
export default UpperMenu;