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

    //Helper function to avoid repetition of the same conditionals in Render 
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/> 
        } 
        
        return <Spinner message="please accept the location request!" />;   //Loading ... 
    }
    

    //React says we have to define render!! as a method 
    //conditional Rendering 
    render() {     
        return (  // //Helper function to avoid repetition of the same conditionals in Render 
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    } 
        
}

ReactDOM.render (
    <App />, 
    document.querySelector('#root')
)