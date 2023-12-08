import { useEffect, useState, useRef } from "react";
import "./customer-service.scss"


const CustomerService = () => {
    const [clicked, setClicked] = useState(0);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const contactUs = useRef();
    const reference = useRef();
      
    // const [swiped, setSwiped] = useState(false)
    // const [isContactView, setIsContactsView] = useState(true)
    // const [touched, setTouched] = useState(false)
    // const [prevY, setPrevY] = useState()
    // const [allowScroll, setAllowScroll] = useState(true)

    // useEffect(() => {
    //     if(!allowScroll){
    //         document.body.classList.add("overflow-hidden")
    //     } else{
    //         document.body.classList.remove("overflow-hidden")
    //     }
        
    //   }, [allowScroll]);


    function handleWhoVisible(i){
        if(window.innerWidth > 992){
            if(clicked === i){
                return "z-1"
            } else {
                return "z-0 overlay"
            }
        } else {

        }
    }
    
    function handleClick(){
        if(window.innerWidth <= 992){
            if(clicked === 0){
                reference.current.classList.remove("d-none");
                contactUs.current.classList.add("d-none");
            } else{
                contactUs.current.classList.remove("d-none");
                reference.current.classList.add("d-none");
            }
        }    
        if(clicked === 0){
            setCheckboxChecked(true);
            setClicked(1)
            reference.current.scrollIntoView({ behavior: "smooth" });
        } else{
            setCheckboxChecked(false);
            setClicked(0)
            contactUs.current.scrollIntoView({ behavior: "smooth" });
        }             
    }

    // function handleClick(i){
    //     if (i !== clicked) {
    //         setIsContactsView(!isContactView);
    //         }
    //     setClicked(i)
    // }

    // function handleSwipe(e){
    //     if(touched){
    //         if(e.touches[0].clientY > prevY){

    //             const differenceOfMove = Math.abs(e.touches[0].clientY - prevY)
    //             if(differenceOfMove > 50 && differenceOfMove < 200){
    //                 setAllowScroll(false)
    //                 setSwiped(true)
    //             } else if (differenceOfMove >= 200) {
    //                 setAllowScroll(true)
    //                 setSwiped(false)
    //             }

    //         } else {
    //             setAllowScroll(true)
    //         }
    //     } 
    // }

    // function handleWhoVisible(i){
    //     if(window.innerWidth > 992){
    //         if(clicked === i){
    //             return "z-1"
    //         } else {
    //             return "z-0 overlay"
    //         }
            
    //     } else {
    //             if(isContactView){
    //                 if(i===0){
    //                     return "contact-on-view z-1"
    //                 } else{
    //                     return "z-0 overlay"
    //                 }
    //                 }else{
    //                     if(i===0){
    //                         return "z-0 overlay"
    //                     } else{ 
    //                         return "contact-on-view z-1"
    //                     }
    //         }
    //     }
    // }
    
    // function handleTouched(e){
    //     setPrevY(e.touches[0].clientY)
    //     setTouched(true);
    // }
    // function handleTouchLeave(i){
    //     if(swiped){
    //         setIsContactsView(!isContactView);
    //         if(clicked === 0){
    //             setClicked(1)
    //         } else {
    //             setClicked(0)
    //         }
    //     }
    //     setSwiped(false)
    //     setTouched(false)
    // }

    return ( 
        <div id="customer-section" className="customer-section">
            <h1 className="pt-5">Contattaci per saperne di più</h1>
            <div className="wrapper-btn">
                <input onChange={()=>handleClick()} type="checkbox" name="checkbox" checked={checkboxChecked} className="switch" />
            </div> 

            {/* <h5 className={(window.innerWidth > 992 ? "visually-hidden ": "" )+ "mt-4"}>Scorri verso l'alto per cambiare contenuto o <br/> clicca la parte più scura</h5> */}
            <div id="contact" className={"contact-section d-flex justify-content-center align-items-center position-relative" + ((window.innerWidth <= 992) ? " flex-column" : "" )}>

                <div ref={contactUs} className={"contact-us " + handleWhoVisible(0)}>
                    {(window.innerWidth > 992) ? <div onClick={()=>handleClick()} className={"w-100 h-100 z-2 bg-dark position-absolute opacity-75 " + ((clicked === 0 && window.innerWidth > 992) ? "visually-hidden" : "z-2 pointer" )}></div> : <></>}
                    <h2>Chiedi informazioni tramite il <br/> modulo seguente</h2>

                    <form className="row g-3 px-4 mt-3 ">
                        <div className="col-md-6">
                            <label htmlFor="input-name" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="input-name"/>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="surname" className="form-label">Cognome</label>
                            <input type="text" className="form-control" id="surname"/>
                        </div>

                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="yourEmail@example.com"/>
                        </div>
                        
                        <div className="col-12">    
                            <select defaultValue={0} className="form-select" aria-label="Default select example">
                                <option value={0} className="first-option">Qual è l'oggetto del messaggio?</option>
                                <option value={1}>Problema con la spedizione</option>
                                <option value={2}>Informazioni</option>
                                <option value={3}>Altro...</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <label htmlFor="description" className="form-label">Messaggio</label>
                            <textarea rows={5} type="text-area" className="form-control" id="description" placeholder="Inserisci il tuo messaggio"/>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="gridCheck">Desideri ricevere Newsletter?</label>
                                <input className="form-check-input custom-check" type="checkbox" id="gridCheck"/>
                            </div>
                        </div>
                        
                        <div className={"btn-container col-12 d-flex " + ((window.innerWidth <= 992) ? "justify-content-center" : "justify-content-end" )}>
                            <button type="submit" id="bg-color-video" className="button-about btn btn-primary rounded-2 fw-bold text-white px-2 py-1 ">Send</button>
                        </div>
                    </form>
                </div>


                <div ref={reference} className={((window.innerWidth <= 992) ? "d-none " : "" ) + "reference d-flex justify-content-center flex-column " + handleWhoVisible(1) }>
                {(window.innerWidth > 992) ? <div onClick={()=>handleClick()} className={"w-100 h-100 bg-dark position-absolute opacity-75 " + ((clicked === 1 && window.innerWidth > 992) ? "visually-hidden" : "z-0 pointer" )}></div> : <></>}
                    <h2>Utilizza le nostre referenze</h2>
                    <ul>
                        <li><i className="bi bi-telephone"></i>Telefono:&nbsp;&nbsp;<a href="#contact">1234567890</a></li>
                        <li><i className="bi bi-envelope"></i>Email:&nbsp;&nbsp;<a href="#contact">dummyemail@DanieleSere.evirgola</a></li>
                        <li><i className="bi bi-instagram"></i>Instagram:&nbsp;&nbsp;<a href="#contact">myInstagram</a></li>
                        <li><i className="bi bi-facebook"></i>Facebook:&nbsp;&nbsp;<a href="#contact">myFacebook</a></li>
                        <li><i className="bi bi-tiktok"></i>TikTok:&nbsp;&nbsp;<a href="#contact">myTikTok</a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default CustomerService;