import { useState } from "react";
import "../styles/customer-service.scss"

const CustomerService = () => {
    const [clicked, setClicked] = useState(0)

    function handleClick(i){
        setClicked(i)
    }

    return ( 
        <div>
            <h1 className="pt-5">Contattaci per saperne di più</h1>
            <div id="contact" className="contact-section vh-100 d-flex justify-content-center align-items-center position-relative">

                <div onClick={() => handleClick(0)} className={"contact-us bg-secondary " + ((clicked === 0) ? "z-1 " : "z-0 overlay" )}>
                    <div className={"w-100 h-100 z-2 bg-dark position-absolute opacity-75 " + ((clicked === 0) ? " visually-hidden" : "z-2 pointer" )}></div>
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
                        
                        <div className="col-12 d-flex justify-content-end">
                            <button type="submit" id="bg-color-video" className="button-about btn btn-primary rounded-2 fw-bold text-white px-2 py-1">Send</button>
                        </div>
                    </form>
                </div>

                <div onClick={() => handleClick(1)} className={"reference bg-primary d-flex justify-content-center align-items-center flex-column " + ((clicked === 1) ? "z-1 " : "z-0 overlay" )}>
                    <div className={"w-100 h-100 bg-dark position-absolute opacity-75 " + ((clicked === 1) ? "visually-hidden" : "z-0 pointer" )}>
                    </div>
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