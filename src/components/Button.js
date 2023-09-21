
const BottoneUtility = ({name, hoverState, handleBtnHover, handleBtnLeave}) => {
    


    return ( 
    <>
        <button type="button" className={ hoverState ? `btn p-3 mb-5 rounded bg-primary`: `btn p-3 mb-5 rounded shadow-btn-sveglia`}  
                              data-bs-toggle="button" 
                              onMouseOver={handleBtnHover}
                              onMouseLeave={handleBtnLeave}> 
        {name} 
        </button>
    </> );
}
 
export default BottoneUtility;