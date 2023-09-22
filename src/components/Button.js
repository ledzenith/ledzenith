
const BottoneUtility = ({name, hoverState, handleBtnHover, handleBtnLeave, bgColor, shadowColor}) => {
    return ( 
    <>
        <button type="button" className={ hoverState ? `btn p-3 mb-5 rounded-pill`: `btn p-3 mb-5 rounded-pill ${shadowColor}`}
                              id={hoverState ? `${bgColor}` : ""}    
                              data-bs-toggle="button" 
                              onMouseOver={()=> handleBtnHover(name)}
                              onMouseLeave={()=> handleBtnLeave(name)}> 
        {name} 
        </button>
    </> );
}
 
export default BottoneUtility;