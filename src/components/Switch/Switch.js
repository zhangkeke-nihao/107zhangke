import React, { Component } from 'react';
import './Switch.css'



export default class Switch extends Component{
   state = {
       isActive: false
   }

   handle = () => {
       if(!this.props.isActive){
            return 'switch gray';
        }
        return 'switch white';
        
   }
   handle1 = () => {
    if(!this.props.isActive){
         return 'switch-bar gray';
     }
     return 'switch-bar green';
     
    }


    render(){
        
        return (
            <div className="switch-wrap">
                <div className={this.handle1()}></div>
                <div className={this.handle()} onClick={this.props.onChangeStatus}></div>
            </div>
           
        );
    }
}

  