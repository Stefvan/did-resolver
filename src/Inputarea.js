import React, { Component } from 'react';

class Inputarea extends Component {
    constructor(props){
        super(props);
        
        this.state = ({id: ""});
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        this.setState({id: e.target.value});
    }
    
    handleSubmit(e){
        this.props.onSubmit(this.state.id);
        e.preventDefault();
    }
    
    render(){
        return (
            <div className="input-area">
                <p>uPort ID</p>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <input type="textbox" onChange={this.handleChange} value={this.state.id} placeholder="Enter uPort ID here" autoFocus spellCheck="false"></input>
                    <button type="submit" className="resolve">Resolve</button>
                </form>
            </div>
        );
    }
}

export default Inputarea;