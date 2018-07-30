import React, { Component } from 'react';
import Header from '../components/Header/Header';
import TabBar from '../components/TabBar/TabBar';
import '../App.css';
import { connect } from 'react-redux';

class Op extends Component {
  render() {
    return (
      <div className="wrap">
        <Header 
            fixedMsg={this.props.userMessage.fixedMsg} 
            personalMsg={this.props.userMessage.personalMsg}
        />
        <TabBar 
            dataSource={this.props.tableMessage.dataSource} 
            columns={this.props.tableMessage.columns} 
            dataSource2={this.props.tableMessage.dataSource2} 
            columns2={this.props.tableMessage.columns2}
        />
      </div>
    );
  }
}


function mapStateToProps(state){
  const { userMessage,tableMessage } = state;
  const props = { userMessage,tableMessage };
  return props;
}  

export default connect(mapStateToProps)(Op);



  



 




