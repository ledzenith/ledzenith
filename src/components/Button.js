
const BottoneUtility = ({id, name, hoverState, clickState, handleBtnHover, handleBtnLeave, shadowColor, handleBtnClick, handleBgColor}) => {

    return ( 
    <>                          
        <button type="button" className={ (hoverState ? '' : ` ${shadowColor} btn-bg-gray `) + ((hoverState || clickState)  ? " white min-size-btn " : "") + ((window.innerWidth < 992)  ? " min-size-btn " : "") + " btn fw-bold fs-6 rounded-pill z-2 black" }
                              id={(hoverState || clickState)  ? `${handleBgColor(id)}` : ""}    
                              data-bs-toggle="button" 
                              onMouseOver={()=> handleBtnHover(id)}
                              onMouseLeave={()=> handleBtnLeave(id)}
                              onClick={()=> handleBtnClick(id)}  
                              >
        {name} 
        </button>
    </> );
}
 
export default BottoneUtility;