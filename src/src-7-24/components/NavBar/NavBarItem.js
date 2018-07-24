import React,{Component} from 'react';
import './NavBar.css'


export default class NavBarItem extends Component{
    constructor(){
        super();
    }
   
    render(){
        const {item} = this.props;
        return (
            <div className="item">
                <img className="icon" src={item.icon} alt=" " /> 
                <div className="botname">{item.botxt}</div>
            </div>
        )
    }
}