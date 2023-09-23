
const BottoneUtility = ({name, hoverState, handleBtnHover, handleBtnLeave, bgColor, shadowColor}) => {
    return ( 
    <>                          
        <button type="button" className={"btn p-2 my-4 rounded-pill " + (hoverState ? '' : `${shadowColor}`)}
                              id={hoverState ? `${bgColor}` : ""}    
                              data-bs-toggle="button" 
                              onMouseOver={()=> handleBtnHover(name)}
                              onMouseLeave={()=> handleBtnLeave(name)}> 
        {name} 
        </button>
    </> );
}
 
export default BottoneUtility;