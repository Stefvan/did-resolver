import React, { Component } from 'react';
import loader from './loader.gif'
import ReactJson from 'react-json-view'

//did:uport:2odb5oWvxJKRWnwVaBJ8C65drWgDhqQCrfd

class Resolve extends Component{
    constructor(props){
        super(props);  
    }
    
    render(){
        return (
            (!this.props.fetched)?
                ((this.props.fetching)?
                    (<div className="fetch">
                        <img className="loader" src={loader} alt="loader"/>
                    </div>)
                 :
                    null)
            :
                ((this.props.failed)?
                    (<div className="failed">
                        {this.props.failed.message}
                    </div>)
                :
                    (<div className="result">
                        {<ReactJson src={this.props.res} collapseStringsAfterLength={60} iconStyle="circle" />}
                    </div>))
                
        );
    }
}

export default Resolve;