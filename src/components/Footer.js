import { Link } from "react-router-dom";
import "./upperMenu/upper-menu.scss"

const Footer = () => {
    // Footer, prendere ispirazione da Amazon
    // Copyright, Privacy Policy, Cookie Policy, Email, Social  
    
    return ( 
        <div className="bg-nav-gradient">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 border-top">
                <p className="px-5 col-md-4 mb-0 text-white">&copy; 2023 LedZenith, Inc</p>

                <a href="#utility-section" className="logo col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <i className="mx-5 text-white bi bi-lightbulb cursor-pointer fs-1"></i>
                </a>
            
                <ul className={"nav col-md-4 flex-wrap px-3 my-0 mx-auto text-end " + ((window.innerWidth >= 768) ? " align-items-end flex-column" : " justify-content-center")}>
                    <li className="nav-item"><Link to="/soon" className="nav-link px-4 text-white">Informativa sulla Privacy</Link></li>
                    <li className="nav-item"><Link to="/soon" className="nav-link px-4 text-white">Informativa sui Cookie</Link></li>
                    <li className="nav-item"><Link to="/soon" className="nav-link px-4 text-white">Condizioni di Vendita</Link></li>
                    <li className="nav-item"><a href="#about-section" className="nav-link px-4 text-white">About Us</a></li>
                </ul>
            </footer>
        </div>
     );
}
 
export default Footer;