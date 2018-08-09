import React, { Component } from 'react';
import Switch from '../components/Switch/Switch'


export default class SwitchWrap extends Component {

  state = {
    isActive: false
  }

  handleChangeStatus = () => {
    this.setState({isActive: !this.state.isActive})
    console.log(!this.state.isActive)
  }

  render() {

    return (
      <div>
        <div className="switch-top">
            <p>Switch</p>
            <span>开关</span>
            
        </div>
        <Switch isActive={this.state.isActive} onChangeStatus={this.handleChangeStatus}/>
      </div>
      );
  }
}

