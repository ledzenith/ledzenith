import "../styles/upper-menu.scss"

const Footer = () => {
    // Footer, prendere ispirazione da Amazon
    // Copyright, Privacy Policy, Cookie Policy, Email, Social  
    
    return ( 
        <div class="bg-nav-gradient">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-4 border-top">
                <p class="px-5 col-md-4 mb-0 text-white">&copy; 2023 LedZenith, Inc</p>

                <a href="#utility-section" class="logo col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <i class="mx-5 text-white bi bi-lightbulb cursor-pointer fs-1"></i>
                </a>
            
                <ul class={"nav col-md-4 flex-wrap px-3 my-0 mx-auto" + ((window.innerWidth >= 768) ? " align-items-end flex-column" : " justify-content-center")}>
                    <li class="nav-item"><a href="#" class="nav-link px-4 text-white">Informativa sulla Privacy</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-4 text-white">Informativa sui Cookie</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-4 text-white">Condizioni di Vendita</a></li>
                    <li class="nav-item"><a href="#about-section" class="nav-link px-4 text-white">About Us</a></li>
                </ul>
            </footer>
        </div>
     );
}
 
export default Footer;