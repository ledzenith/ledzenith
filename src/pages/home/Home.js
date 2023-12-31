import UtilitySection from "./utilitySection/UtilitySection";
import GuaranteeSection from "./guaranteeSection/GuaranteeSection";
import UpperMenu from "../../components/upperMenu/UpperMenu";
import Footer from "../../components/Footer";
import AboutUs from "./aboutUs/AboutUs";
import CustomerService from "./customerService/CustomerService";

import { useEffect, useState } from "react";


const Home = () => {
    // Questa sarà La pagina Home che conterrà i seguenti componenti:
    // 1- UpperMenu, 2- UtilitySection, 3- GuaranteeSection, 4- ProductSection
    // 5- Carousel, 6- Footer
    const [isScrolling, setIsScrolling] = useState(false)
    const [isMouseTop, setIsMouseTop] = useState(false)
    const [scrollY, setScrollY] = useState(null)


    useEffect(() => {
        let timeout;
      
        function handleScroll() { // apparizione Navbar allo scroll
          if(scrollY > window.scrollY){
            setIsScrolling(true);
          } else {
            setIsScrolling(false)
          }
          setScrollY(window.scrollY)

        }
        
        function handleMouseMove(e){ // apparizione navabar con mouse in alto
          if( e.clientY < 35 ){
            setIsMouseTop(true)
          } else {setIsMouseTop(false)}
        }
    
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        clearTimeout(timeout);
          timeout = setTimeout(() => {
            setIsScrolling(false);
          }, 1500);

        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("mousemove", handleMouseMove);
          clearTimeout(timeout);
        };
      }, [scrollY, isScrolling]);


    return ( 
        <>
            <UpperMenu isScrolling={isScrolling} isMouseTop={isMouseTop} />
            <UtilitySection />
            <AboutUs />
            <GuaranteeSection />
            <CustomerService />
            <Footer />
        </>
     );
}
 
export default Home;