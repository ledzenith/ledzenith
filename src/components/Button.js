
const BottoneUtility = ({id, name, hoverState, handleBtnHover, handleBtnLeave, bgColor, shadowColor}) => {
    return ( 
    <>                          
        <button type="button" className={"btn p-2 fw-bold fs-6 my-4 rounded-pill " + (hoverState ? '' : `${shadowColor}`)}
                              id={hoverState ? `${bgColor}` : ""}    
                              data-bs-toggle="button" 
                              onMouseOver={()=> handleBtnHover(id)}
                              onMouseLeave={()=> handleBtnLeave(id)}> 
        {name} 
        </button>
    </> );
}
 
export default BottoneUtility;