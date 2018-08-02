import React, { Component } from 'react';
import { Table } from 'antd';
import { Icon } from 'antd';
import { Popover,Button } from 'antd';
import { Switch } from 'antd';
import { Rate } from 'antd';
import '../table.css'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action/index';

class SatisifyTable extends Component{

    render(){
        const { Actions } = this.props;
        const columns4 = [{
            title: '教程',
            dataIndex: 'course_name',
            key: 'course_name',
            align: 'center',
          }, {
            title: '开课时间',
            dataIndex: 'time',
            key: 'time',
            align: 'center',
          }, {
            title: '老师',
            dataIndex: 'teacher_info',
            key: 'teacher_info',
            align: 'center',
            render:text => {
                return <div>
                          <Popover content={`老师：${text.nick}; id：${text.mid}; 微信：${text.wxCode}`} >
                            <Button style={{border:'none',width:'10px'}}><Icon type="smile" /></Button>
                        </Popover>
                          <span>{text.nick}</span>
                       </div>
            }
          },{
            title: '满意度评分',
            dataIndex: 'satisfied_score',
            key: 'satisfied_score',
            align: 'center',
            render:text=>{
              if( text < 5 ){
                return <span className="Red">{text}</span>
              }
              else{
                return <span>{text}</span>
              }
            }
          },{
            title: '具体反馈',
            dataIndex: 'satisfied_detail',
            key: 'satisfied_detail',
            align: 'center',
          },{
            title: '操作',
            dataIndex: 'reply_status',
            key: 'reply_status',
            align: 'left',
            render:(text,record) => {
                const t = record;
                if(text == 0){
                    // return <Rate count={1} allowClear={false} character={'已回复'} style={{fontSize:16}}/>
                    return <div onClick={() => Actions.changeMailStatus(t.reply_status)}>待回复</div>
                }
                if(text == 1){
                    // return <Icon type="check" style={{color:'#FBDE14',fontSize:22}}/>
                    return  <div>
                                <Icon type="mail" />
                                <span>已回复</span>
                            </div>
                }
            },
           
          }]
        const { SatisifyList } = this.props;

        return (
            <div>
                <Table dataSource={SatisifyList} columns={columns4} bordered />
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

export default connect(mapStateToProps,mapDispatchToProps)(SatisifyTable);
  
  
