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
                this.setState({failed: {message: "Invalid DID entered!"}, 
                               result: {},
                               fetched: true});
            })
        } else {
            this.setState({result: {},
                           fetched: true,
                           failed: {message: "Please enter a DID!"}});
          }
    };
    
    
  render() {
      
    return (
      <div>
        <header className="header">
            <h1>uPort DID Resolver</h1>
            <p>Resolve a uPort ID into <a href="https://w3c-ccg.github.io/did-spec/" target="_blank" rel="noopener noreferrer">DID document</a></p>
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
        <div className="articles">
            <p><span className="right-arrow" role="img">&#9654;</span><code><a className="git-link" href="https://github.com/Stefvan/did-resolver" target="_blank" rel="noopener noreferrer">Source code </a></code> for this project</p>
            <p><span className="right-arrow" role="img">&#9654;</span>Read more about uPort</p>
            <a href="https://www.uport.me/" target="_blank" rel="noopener noreferrer">uPort page</a><br />
            <a href="https://medium.com/uport" target="_blank" rel="noopener noreferrer">medium.com/uport</a>
        </div>
      </div>
    );
  }
}

export default App;
