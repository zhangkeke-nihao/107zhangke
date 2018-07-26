import React,{Component} from 'react';
import { connect } from 'react-redux';
import { DIALOG_SHOW_STATES } from '../../const';

class MessageItem extends Component{
    constructor(){
        super();
    }

    //点击更多，转换状态值,传index
    handleMoreClick = () => {
        const { todoActions,index } = this.props;
        todoActions.changeStatus(DIALOG_SHOW_STATES.SHOW_MORE_DIALOG,index)
        todoActions.onIndex(index);
    }

    render(){
        const { item } = this.props;
        return (
            <li className="message"> 
                <img src={item.icon} alt="" />
                <div className="content">
                    <div className="name">
                        <h2 className="title">{item.title}</h2>
                        <div className="time">{item.time}</div>
                    </div>
                    <div className="msg">
                        <span className="recentMsg">{item.descript}</span>
                        <span className="button" onClick={this.handleMoreClick}>更多</span>
                    </div>
                </div>
            </li>
        )
    }
}


function mapStateToProps(state){ 
    const props = state;
    return props;
}
export default connect(mapStateToProps)(MessageItem);