import React from 'react';
import MessageItemView from './components/MessageItem.js';
import DialogView from './components/DialogView.js';
import NewDialogView from './components/NewDialogView.js';
import './App.css';

const icons = require('./image/search.png')
const icona = require('./image/add.png')
const iconm = require('./image/message.png')
const iconl = require('./image/list.png')
const iconf = require('./image/find.png')
const iconw = require('./image/wo.png')
const icon1 = require('./image/bg1.jpg')   
const icon2 = require('./image/bg2.jpg')
const icon3 = require('./image/bg3.jpg')

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      messages: [
        {
          icon: icon1,
          title: '小年糕',
          descript: 'hello 小年糕',
          time: '7-18 11:14'
        },
        {
          icon: icon2,
          title: '小板凳',
          descript: 'hello 小板凳',
          time: '7-18 11:15',
        },
        {
          icon: icon3,
          title: '小豆包',
          descript: 'hi 小豆包',
          time: '7-17 10:00',
        }
      ],
      showDailog: false,
      newshowDailog: false
    }
  }

  // onItemClick = (message) => {
  //   console.log(message);
  // }

  handleAddItem = (e) => {
    const newMessages = this.state.messages.slice();
    newMessages.unshift({
      title: e.target.value,
      descript: '哎呦不错',
      time: '2018-07-19'
    });
    console.log(newMessages)
    this.setState({
      messages: newMessages
    });
  }

  handleShowDialog = (isActive) => {
    this.setState({ showDailog: isActive });
  }

  newhandleShowDialog = (newActive) => {
    this.setState({ newshowDailog: newActive });
    console.log(1)
  }

  renderMessageList = () => {
    const messageViews = this.state.messages.map((item,i) => {
      return <MessageItemView key={i} item={item} newDialog={this.newhandleShowDialog}/>
    });
    return messageViews;
  }

  

  render() {
    return (
      <div className="wrap">
        {/* 上部 */}
        <div className="top">
              <span>微信</span>
              <div className="right">
                  <img className="left" src={icons} alt="图片未显示"/>
                  <img src={icona} alt="图片未显示" onClick={this.handleShowDialog.bind(this, true)}/>
              </div>
        </div>
        {/* 内容列表部分 */}
        { this.renderMessageList() }
        {/* 底部 */}
        <nav className="nav">
          <div className="item">
            <img className="icon" src={iconm} alt="" />
            <div className="botname">微信</div>
          </div>
          <div className="item">
            <img className="icon" src={iconl} alt="" />
            <div className="botname">通讯录</div>
          </div>
          <div className="item">
            <img className="icon" src={iconf} alt="" />
            <div className="botname">发现</div>
          </div>
          <div className="item">
            <img className="icon" src={iconw} alt="" />
            <div className="botname">我</div>
          </div>
        </nav>

        <DialogView isActive={this.state.showDailog} onCloseClick={this.handleShowDialog} addItem={this.handleAddItem}/>
        <NewDialogView newActive={this.state.newshowDailog} onCloseClick={this.newhandleShowDialog} />
      </div>
    );
  }
}

export default App;
