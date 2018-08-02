import React, { Component } from 'react';
import { Table } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as messageActionsCreators from '../../action/index'


class StudentTable extends Component{
    constructor(props) {
        super(props)
        this.handleConfirmAddClick = this.handleConfirmAddClick.bind(this)
      }
    handleConfirmAddClick = () => {
        console.log(11111)
        const { router } = this.props;
        console.log(router)
        router.goBack()
    }

    render(){
        const columns2 = [{
            title: '   ',
            dataIndex: 'hurl',
            key: 'hurl',
            align: 'center',
            render: text => {
              return  <div>
                        <img src={text} style={{width:'20px',height:'20px'}}/>
                      </div>
            }
        },{
          title: '学员名',
          dataIndex: 'student',
          key: 'student',
          align: 'center',
          render: student => {
            return <div>
              <Link to={`/lessonContent/${student.mid}`}>{student.nick}</Link>
            </div>
          }
        }, {
          title: '学员编号/MID',
          dataIndex: 'mid',
          key: 'mid',
          align: 'center',
          render: text => {
            return <div>
              <Link to={`/lessonContent/${text}`}>{text}</Link>
            </div>
          }
        }, {
          title: '入学时间',
          dataIndex: 'start_time',
          key: 'start_time',
          align: 'center',
        },{
          title: '开课时间',
          dataIndex: 'enter_time',
          key: 'enter_time',
          align: 'center',
        },{
          title: '在学课程',
          dataIndex: 'learning_lessons',
          key: 'learning_lessons',
          align: 'center',
          render: text => {
            return <div>
              <span>{text.join(' ')}</span>
            </div>
          }
        },{
          title: '负责老师',
          dataIndex: 'teachers',
          key: 'teachers',
          align: 'center',
          render: text => {
            return  <div>
                      <span>{text[0]}</span>
                    </div>
          }
        }];
    
        const { StudentList } = this.props;
        
        return (
            <div>
                <div className="button-box-wrap">
                    <div className="button-box-left">
                        <Button style={{border:'2px solid #bbb',color:'#000'}}>汇总</Button>
                        <Button style={{background:'#ccc',margin:'0 10px',border:'2px solid #ccc',color:'#000'}}>摄影课</Button>
                        <Button style={{border:'2px solid #bbb',color:'#000'}}>绘画课</Button>
                    </div>
                    <div className="button-box-right">
                        <Button onClick={this.handleConfirmAddClick} className="button-box-right" style={{border:'2px solid #bbb',color:'#000'}}>返回</Button>
                    </div>
                </div>
                <Table dataSource={StudentList} columns={columns2} bordered />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      ...state
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      messageActions: bindActionCreators(messageActionsCreators, dispatch),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(StudentTable)
  
