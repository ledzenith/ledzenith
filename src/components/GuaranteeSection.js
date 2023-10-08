    import { useEffect, useState } from "react";
    import "../styles/guarantee-section.scss"
    import { useRef } from "react";

    const GuaranteeSection = () => {
        // Banner che contiene le immagini di garanzia(reso, spedizione gratuita, tempo di spedizione, etc..), 
        // al click delle immagini si apre un popup che mostra la descrizione della garanzia
        const [expand, setExpand] = useState(false)
        const [press, setPress] = useState(false)
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
                let positionDiff = e.clientX - prevPageX;    
                // let positionDiff = (e.clientX || e.touches[0].clientX) - prevPageX;    
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
            // setPrevPageX(e.clientX || e.touches[0].clientX); 
            setPrevScrollLeft(carouselRef.current.scrollLeft);
            setPress(true);
        }


        function handleOut(e){
            setPress(false);
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
        
        


        // JSX
        return ( 
            <>
            <div className="wrapper bg-light position-relative">
                <i ref={arrowLeft} onClick={()=> handleClick(0)} className="arrow bi bi-chevron-left d-none d-lg-flex"></i>
                <div className="main-container">
                    <h1 className="text-center mb-5 px-5 text-uppercase title-custom fs-1">Scopri i nostri servizi</h1>
                    <div ref={carouselRef} className={`carousel bg-light ${expand ? "expand" : "gradient-guarantee" }`} onTouchStart={handlePress} onTouchMove={handleMove} onTouchEnd={handleOut} 
                                                                                                                        onMouseDown={handlePress}  onMouseMove={handleMove} onMouseUp={handleOut}  onMouseLeave={handleOut}> 
                                                                                                                        
                                <div className="icon-container" onMouseOut={handlePropagation}>
                                    <div className="box" >
                                        <i className="bi bi-box2 fs-guarantee-icon"></i> 
                                        <h5>Politica di reso</h5>
                                    </div>
                                </div>
                                <div className="icon-container" onMouseOut={handlePropagation}>
                                    <div className="box" >
                                        <i className="bi bi-clock fs-guarantee-icon" ></i>
                                        <h5 >Tempi di spedizione</h5>
                                    </div>
                                </div>
                                <div className="icon-container" onMouseOut={handlePropagation}>
                                    <div className="box" >
                                        <i className="bi bi-truck fs-guarantee-icon" ></i>
                                        <h5 >Spedizioni gratuite</h5>
                                    </div>
                                </div>
                                <div className="icon-container" onMouseOut={handlePropagation}>
                                    <div className="box" >
                                        <i className="bi bi-person-check fs-guarantee-icon" ></i>
                                        <h5 >Servizio clienti</h5>
                                    </div>
                                </div>
                                <div className="icon-container" onMouseOut={handlePropagation}>
                                    <div className="box" >
                                        <i className="bi bi-cash-coin fs-guarantee-icon" ></i>
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