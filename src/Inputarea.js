import React, { Component } from 'react';
import './App.css';
import './App.js';

class Inputarea extends Component {
    constructor(props){
        super(props);
        
        this.state = ({
            id: "",
            clicked: false
        });
        
        this.handleChange = this.handleChange.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }
    
    handleChange(e){
        this.setState({
            id: e.target.value
        });
    }
    
    handleEvent(e){
        this.props.onClick(this.state.id,!this.state.clicked);
        e.preventDefault();
    }
    
    render(){
        return (
            <div className="input-area">
                <p>uPort ID</p>
                <form autoComplete="off" onSubmit={this.handleEvent}>
                    <input type="textbox" onChange={this.handleChange} value={this.state.id} id="uportid" placeholder="Enter uPort ID here" autoFocus spellCheck="false"></input>
                    <button className="resolve" onClick={this.handleEvent}>Resolve</button>
                </form>
            </div>
        );
    }
}

export default Inputarea;