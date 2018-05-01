import React, { Component } from 'react';
import './App.css';
import Resolve from './Resolve';
import Inputarea from './Inputarea';

class App extends Component {
    constructor(){
        super();
        this.state = {
            id: "",
            clicked: false
        };        
        
        this.handleEvent = this.handleEvent.bind(this);
    }
    
    handleEvent(id,clicked){
        this.setState({
            id: id,
            clicked: clicked
        });
    };

  render() {      
    return (
      <div className="">
        <header className="header">
            <h1 className="title">uPort DID Resolver</h1>
            <p>This page is designed to resolve uPort DID documents</p>
        </header>
        <div className="contents">
            <Inputarea onClick={this.handleEvent} />  
            {(this.state.clicked)?
                <Resolve id={this.state.id} clicked={this.state.clicked} />
                :
                null
            }
        </div>
      </div>
    );
  }
}

export default App;
