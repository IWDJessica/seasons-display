import React from 'react'; 

const Spinner = (props)=> {    //website : semantic ui -> elements -> text loader, spinner 
    return (  //  {props.message || 'Loading ...'} 
    <div className="ui active dimmer">
        <div className="ui big text loader">
           {props.message}  
        </div>  

    </div>
    ); 
}; 

//how to use the default prop 
Spinner.defaultProps = {
    message: 'Loading ...'
}; 

export default Spinner; 
