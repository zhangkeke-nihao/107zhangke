import React, { Component } from 'react';
import { Input } from 'antd';
import './remarkwork.css'

export default class RemarkWord extends Component {
  render() {
    const Search = Input.Search;
    return (
      <div className="remark-wrap">
          <Search
            placeholder="请输入点评内容"
            enterButton="发送"
            size="large"
            onSearch={value => console.log(value)}
        />
      </div>
      );
  }
}

