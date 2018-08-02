import React, { Component } from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import './search.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action/index';


class Search extends Component{

    render(){
        const Option = Select.Option;
        const Search = Input.Search;
        const { Actions } = this.props;
        return (
            <div className="search-bar">
                <Select defaultValue="mid" style={{ width: 60 }} filterOption="true">
                    <Option value="mid">mid</Option>
                </Select>
               
                <Search
                    placeholder="MID"
                    onSearch={(value) => {Actions.changeTableItem(value)}}
                    style={{ width: 200 }}
                />
            </div>
        )
    }
}



function mapStateToProps(state){
    const {userMessage,tableMessage} = state;
    const props = {userMessage,tableMessage};
    return props;
}  
  

const mapDispatchToProps = dispatch => {
    return {
        Actions: bindActionCreators(actionCreators, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
  
  