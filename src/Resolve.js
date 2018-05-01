import React, { Component } from 'react';
import './App.css';
import loader from './loader.gif'
import resolve from 'did-resolver'
import ReactJson from 'react-json-view'
import registerResolver from 'uport-did-resolver'
import './App.js';


//did:uport:2odb5oWvxJKRWnwVaBJ8C65drWgDhqQCrfd

class Resolve extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: "",
            fetch: false,
            failed: false,
            result: {}
        };
        
        this.performResolve = this.performResolve.bind(this);
        
    }
    
    performResolve(){
        registerResolver();
            
        if(this.state.id){
            resolve(this.state.id).then(res => {
                this.setState({fetch: false,
                               result: res});
            }).catch( e => {
                this.setState({failed: true, 
                               failed: {message: "Invalid DID entered"}, 
                               fetch:false})
            })}
            else {
                this.setState({failed: true, 
                               failed: {message: "Please enter a DID"}, 
                               fetch:false})
            }
    }
    
    componentDidMount(){
        this.performResolve();   
    }
    
    componentWillMount(){
        this.setState({
            id: this.props.id,
            fetch: this.props.clicked
        });
    }
    
    render(){
        return (
            (this.state.fetch)?
                (<div className="fetch">
                    <img className="loader" src={loader} alt="loader"/>
                </div>):
                ((this.state.failed)?
                    (<div className="failed">
                        {this.state.failed.message}
                    </div>):
                    (<div className="result">
                        {<ReactJson src={this.state.result} collapseStringsAfterLength={60} iconStyle="circle" />}
                    </div>)
                )
        );
    }
}

export default Resolve;