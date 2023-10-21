import { useEffect, useState, useRef } from "react";
import "../styles/guarantee-section.scss"
import  Modal  from "./Modal";

import { testoReso, testoSpedizione, testoClienti, testoTempi, testoPagamento } from "../assets/Testi";


    const GuaranteeSection = () => {
        // Banner che contiene le immagini di garanzia(reso, spedizione gratuita, tempo di spedizione, etc..), 
        // al click delle immagini si apre un popup che mostra la descrizione della garanzia
        const [expand, setExpand] = useState(false)
        const [press, setPress] = useState(false)
        const [hasScrolled, setHasScrolled] = useState(false);
        const [canShowModal, setCanShowModal] = useState(false);
        const [prevPageX, setPrevPageX] = useState(null); 
        const [prevScrollLeft, setPrevScrollLeft] = useState(null);
        const [currentIndex, setCurrentIndex] = useState(1);

        const carouselRef = useRef(null);
        const arrowLeft = useRef(null);
        const arrowRight = useRef(null);

        useEffect(() => {
            if (carouselRef.current) {
              const centerScrollLeft = (carouselRef.current.scrollWidth - carouselRef.current.clientWidth) / 2;
              carouselRef.current.scrollLeft = centerScrollLeft;
            }
            
            carouselRef.current.addEventListener("wheel", handleWheel, { passive: false });

          }, []);

        
        function handleExpansion(e) {
            setExpand(!expand)
            carouselRef.current.scrollTop = 0;
        }


        function handleMove(e){
            const scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
            if(press){
                let positionDiff = (e.clientX || e.touches[0].clientX) - prevPageX; // aggiunzione compatibilità touches   
                if(Math.abs(positionDiff) > 0){
                    setHasScrolled(true)
                }   
                carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
                if(carouselRef.current.scrollLeft === 0){
                    arrowLeft.current.classList.add("invisible") 
                } else if(carouselRef.current.scrollLeft === scrollWidth) {
                    arrowRight.current.classList.add("invisible")
                } else {
                    arrowLeft.current.classList.remove("invisible")
                    arrowRight.current.classList.remove("invisible") 
                }
            }
        }
        function handleWheel(e) {
            const scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
            const scrollLeft = carouselRef.current.scrollLeft;
            const delta = e.deltaX;
            
            let newPosition = scrollLeft + delta;
            
            if (newPosition > scrollWidth) {
                newPosition = scrollWidth;
            }
            
            if (newPosition < 0) {
                newPosition = 0;
            }

            if (newPosition !== scrollLeft){
                e.preventDefault();
            }
            
            carouselRef.current.scrollLeft = newPosition;
            
            if (newPosition === 0) {
                arrowLeft.current.classList.add("invisible");
            } else if (newPosition === scrollWidth) {
                arrowRight.current.classList.add("invisible");
            } else {
                arrowLeft.current.classList.remove("invisible");
                arrowRight.current.classList.remove("invisible");
            }
            }


        function handlePress(e){
            setPrevPageX(e.clientX);
            setPrevPageX(e.clientX || e.touches[0].clientX); // aggiunzione compatibilità touches
            setPrevScrollLeft(carouselRef.current.scrollLeft);
            setPress(true);
        }


        function handleOut(e){
            setPress(false);
            setHasScrolled(false);
        }


        function handleClick(direction){
            let newIndex = currentIndex;
            const numItems = carouselRef.current.children.length - 1; // -1 a causa del div vuoto per il responsive
            const itemsPerPage = 3;

            arrowLeft.current.classList.remove("invisible")
            arrowRight.current.classList.remove("invisible")
            
            if (direction === 0) {
                newIndex = Math.max(newIndex - 1, 0);
            } else {
                newIndex = Math.min(newIndex + 1, numItems - itemsPerPage);
            }
            if(newIndex === 0){
                arrowLeft.current.classList.add("invisible")
            } else
            if(newIndex === (numItems - itemsPerPage)){
                arrowRight.current.classList.add("invisible")
            }

            setCurrentIndex(newIndex);
            carouselRef.current.classList.add('smooth-scroll');
            const items = carouselRef.current.children;
            const scrollLeft = items[newIndex].offsetLeft;
            carouselRef.current.scrollLeft = scrollLeft;
            carouselRef.current.classList.remove('smooth-scroll');   
        }

        function handlePropagation(e) {
            e.stopPropagation(); 
          }
        
        function handleMouseUp(e){
            if (hasScrolled) {
                setCanShowModal(false)
              } else {
                setCanShowModal(true)
              }
        }


        // JSX
        return ( 
            <>
            <div id="guarantee-section" className="wrapper bg-light position-relative">
                <i ref={arrowLeft} onClick={()=> handleClick(0)} className="arrow bi bi-chevron-left d-none d-lg-flex"></i>
                <div className="main-container">
                    <h1 className="guarantee-title text-center mb-5 px-5 text-uppercase title-custom position-relative">Scopri i nostri servizi</h1>
                    <div ref={carouselRef} className={`carousel bg-light ${expand ? "expand" : " gradient-guarantee" } ${(window.innerWidth < 992) ? " carousel-responsive" : "" } `} onTouchStart={handlePress} onTouchMove={handleMove} onTouchEnd={handleOut} 
                                                                                                                        onMouseDown={handlePress}  onMouseMove={handleMove} onMouseUp={handleOut}  onMouseLeave={handleOut}>                                                                                       
                                <div className="icon-container" onMouseOut={handlePropagation}>
                                    <div className="box" onMouseUp={handleMouseUp} data-bs-toggle={canShowModal ? "modal" : ""} data-bs-target="#resoModal">
                                        <i className="bi bi-box2 fs-guarantee-icon"></i>
                                        <Modal key={0} title={"Politica di reso"} text={testoReso} modalId={"resoModal"}/> 
                                        <h5>Politica di reso</h5>
                                    </div>
                                </div>
                                <div className="icon-container" onMouseOut={handlePropagation}>
                                    <div onMouseUp={handleMouseUp} className="box" data-bs-toggle={canShowModal ? "modal" : ""} data-bs-target="#tempiModal">
                                        <i className="bi bi-clock fs-guarantee-icon" ></i>
                                        <Modal key={1} title={"Tempi di spedizione"} text={testoTempi} modalId={"tempiModal"}/>
                                        <h5 >Tempi di spedizione</h5>
                                    </div>
                                </div>
                                <div className="icon-container" onMouseOut={handlePropagation}>
                                    <div className="box" onMouseUp={handleMouseUp} data-bs-toggle={canShowModal ? "modal" : ""} data-bs-target="#spedizioneModal">
                                        <i className="bi bi-truck fs-guarantee-icon"></i>
                                        <Modal key={2} title={"Spedizioni gratuite"} text={testoSpedizione} modalId={"spedizioneModal"}/>
                                        <h5 >Spedizioni<br/>gratuite</h5>
                                    </div>
                                </div>
                                <div className="icon-container" onMouseOut={handlePropagation}>
                                    <div className="box" onMouseUp={handleMouseUp} data-bs-toggle={canShowModal ? "modal" : ""} data-bs-target="#clientiModal">
                                        <i className="bi bi-person-check fs-guarantee-icon"></i>
                                        <Modal key={3} title={"Servizio clienti"} text={testoClienti} modalId={"clientiModal"}/>
                                        <h5 >Servizio clienti</h5>
                                    </div>
                                </div>
                                <div className="icon-container" onMouseOut={handlePropagation}>
                                    <div className="box" onMouseUp={handleMouseUp} data-bs-toggle={canShowModal ? "modal" : ""} data-bs-target="#pagamentiModal">
                                        <i className="bi bi-cash-coin fs-guarantee-icon"></i>
                                        <Modal key={4} title={"Metodi di pagamento"} text={testoPagamento} modalId={"pagamentiModal"}/>
                                        <h5 >Metodi di pagamento</h5>
                                    </div>
                                </div>
                                <div className="icon-container">
                                    <div className="invisible-box d-lg-none"><i></i></div>
                                </div>
                    </div>
                    <span className="expander d-flex justify-content-center align-items-center fw-bolder fs-6 d-lg-none"> <u onClick={() => handleExpansion()}> {expand ? "riduci": "espandi"} </u> </span>
                </div>
                <i ref={arrowRight} onClick={() => handleClick(1)} className="arrow bi bi-chevron-right d-none d-lg-flex"></i>
            </div>
            </>
        );
    }
    
    export default GuaranteeSection;