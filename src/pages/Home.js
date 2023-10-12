import UtilitySection from "../components/UtilitySection";
import GuaranteeSection from "../components/GuaranteeSection";
import UpperMenu from "../components/UpperMenu";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Home = () => {
    // Questa sarà La pagina Home che conterrà i seguenti componenti:
    // 1- UpperMenu, 2- UtilitySection, 3- GuaranteeSection, 4- ProductSection
    // 5- Carousel, 6- Footer
    const [isScrolling, setIsScrolling] = useState(false)
    const [isMouseTop, setIsMouseTop] = useState(false)


    useEffect(() => {
        let timeout;
    
        function handleScroll() {
          setIsScrolling(true);
    
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            setIsScrolling(false);
          }, 1500);
        }

        function handleMouseMove(e){
          if( e.clientY < 35 ){
            setIsMouseTop(true)
          } else {setIsMouseTop(false)}
        }
    
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
            
        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("mousemove", handleMouseMove);
          clearTimeout(timeout);
        };
      }, []);


    return ( 
        <>
            <UpperMenu isScrolling={isScrolling} isMouseTop={isMouseTop}/>
            <UtilitySection />
            <GuaranteeSection />
            <Footer />
        </>
     );
}
 
export default Home;