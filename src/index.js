import React from 'react'; 
import ReactDOM from 'react-dom'; 
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'; 

class App extends React.Component {   
        state = { lat: null, errorMessage: null };  //state initializing without using constructor

    componentDidMount () {  //refactoring Data-loading using life-cycle method componentDidMount 
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState ({ lat: position.coords.latitude}),    
            err => this.setState ({errorMessage: err.message})  //call-back funciton
        ); 
    }

    //React says we have to define render!! as a method 
    //conditional Rendering 
    render() {      
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/> 
        } 
        
        return <Spinner></Spinner>; 
    }
}

ReactDOM.render (
    <App />, 
    document.querySelector('#root')
)