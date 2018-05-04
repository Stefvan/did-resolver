import React, { Component } from 'react';
import './App.css';
import Resolve from './Resolve';
import Inputarea from './Inputarea';
import registerResolver from 'uport-did-resolver';
import resolve from 'did-resolver';


class App extends Component {
    constructor(){
        super();
        this.state = {
            result: {},
            failed: false,
            fetching: false,
            fetched: false,
            submitted: false
        };        
        
        registerResolver();
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(id){
        this.setState({submitted: true});
        if(id){
            this.setState({fetched: false, fetching: true});
            resolve(id).then(res => {this.setState({result: res,
                                                    failed: false,
                                                    fetched: true});
            }).catch(e => {
                this.setState({failed: {message: "Invalid DID entered"}, 
                               result: {},
                               fetched: true});
            })
        } else {
            this.setState({result: {},
                           fetched: true,
                           failed: {message: "Please enter a DID"}});
          }
    };
    
    
  render() {
      
    return (
      <div className="">
        <header className="header">
            <h1 className="title">uPort DID Resolver</h1>
            <p>This page is designed to resolve uPort DID documents</p>
        </header>
        <div className="contents">
            <Inputarea onSubmit={this.handleSubmit} />  
            {(this.state.submitted)?
                (<div>
                    <Resolve res={this.state.result} fetching={this.state.fetching} fetched={this.state.fetched} failed={this.state.failed}/>
                 </div>)
                :
                null
            }
        </div>
      </div>
    );
  }
}

export default App;
