
const BottoneUtility = ({id, name, hoverState, clickState, handleBtnHover, handleBtnLeave, bgColor, shadowColor, handleBtnClick}) => {
    return ( 
    <>                          
        <button type="button" className={ (hoverState ? '' : ` ${shadowColor} btn-bg-gray `) + ((hoverState || clickState)  ? " white " : "") + " btn p-2 fw-bold fs-6 my-4 rounded-pill z-2 black " }
                              id={(hoverState || clickState)  ? `${bgColor}` : ""}    
                              data-bs-toggle="button" 
                              onMouseOver={()=> handleBtnHover(id)}
                              onMouseLeave={()=> handleBtnLeave(id)}
                              onClick={()=> handleBtnClick(id)}> 
        {name} 
        </button>
    </> );
}
 
export default BottoneUtility;