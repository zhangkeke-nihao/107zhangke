import React,{Component} from 'react';
import MessageItemView from './MessageItem';

export default class MessageList extends Component{
    constructor(){
        super();

    }

    render(){
            const { message,onShowMoreDialog } = this.props;
            const msg = message.map((item,idx) => {
                return  <MessageItemView 
                          key={idx} 
                          item={item} 
                          index={idx} 
                          onShowMoreDialog={onShowMoreDialog} 
                        />
            })
            return msg;
    }
}