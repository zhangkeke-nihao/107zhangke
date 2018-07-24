import React,{Component} from 'react';
import NavBarItem from './NavBarItem.js'
import './NavBar.css'

export default class NavBar extends Component{
    constructor(){
        super();
    }

    renderNavBarItem = () => {
        const { messages } = this.props;
        const messaget = messages.map((item,idx) => {
            return  <NavBarItem key={idx} item={item}/>
        })
        return messaget;
    }
   
    render(){
        return (
            <div className="nav">
                {this.renderNavBarItem()}
            </div>
        );
    }
}
