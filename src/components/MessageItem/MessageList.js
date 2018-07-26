import React,{Component} from 'react';
import MessageItemView from './MessageItem';

export default class MessageList extends Component{
    constructor(){
        super();
    }

    render(){
            const { message,todoActions } = this.props;
            const msg = message.map((item,idx) => {
                return  <MessageItemView 
                          key={idx} 
                          index={idx}
                          item={item}  
                          todoActions={todoActions} 
                        />
            })
            return msg;
    }
}