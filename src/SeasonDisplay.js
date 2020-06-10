import React from 'react'; 
import './SeasonDisplay.css'; // webpack works 

const SeasonDisplay = (props) => {  //functional component
    const season = getSeason(props.lat, new Date().getMonth()); 
    const { text, iconName } = seasonConfig[season];  
    
    return (
        <div className={`season-display ${season}`}> 
        <i className ={`icon-left massive ${iconName} icon`} />  
        <h1>{text}</h1>
        <i className ={`icon-right massive ${iconName} icon`} /> 
        </div>
    );
};  

const seasonConfig = {
    summer: {
        text : "Let's hit the beach!",
        iconName : 'sun'
    },
    winter: {
        text : "Burr it is cold. I need your hugs.",
        iconName : 'snowflake'
    }
}; 

const getSeason = (lat, month) => {  //helper function 
    if (month > 2 && month < 9)  {//Northern hemisphere 3~8 
        return lat > 0 ? 'summer' : 'winter';   // JS ternery expression : otherwise
    }else {
        return lat > 0 ? 'winter' : 'summer';  
    }
}; 





// const SeasonDisplay = (props) => {
//     const season = getSeason(props.lat, new Date().getMonth()); 
//     return (<div> {season === 'winte' ? 'Burr, it is chilly' : 'Lets hit the beach'} </div>);
// }; 

export default SeasonDisplay;

// ReactDOM.render (
//     <SeasonDisplay />, 
//     document.querySelector('#root')
// )

