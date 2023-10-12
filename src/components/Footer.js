const Footer = () => {
    // Footer, prendere ispirazione da Amazon
    // Copyright, Privacy Policy, Cookie Policy, Email, Social  
    
    return ( 
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-muted">&copy; 2022 LedZenith, Inc</p>
                <a href="/" class="logo col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <i class="bi bi-lightbulb cursor-pointer fs-1"></i>
                </a>
            
                <ul class={"nav col-md-4 flex-wrap" + ((window.innerWidth >= 768) ? " justify-content-end" : " justify-content-center")}>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Informativa sulla Privacy</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Informativa sui Cookie</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Condizioni di Vendita</a></li>
                </ul>
            </footer>
        </div>
     );
}
 
export default Footer;