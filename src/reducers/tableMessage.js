import React from 'react';
import { Icon } from 'antd';
const initState = {
  dataSource: [{
    key: '1',
    class: '高级班',
    classStatus: '进行中',
    startTime: '2017-04-20',
    teacher: '小白老师',
    classRate: '3/21',
    submitRate: '67.98%',
    review: '87.98%',
    clock: '3/21',
    satisfaction: '90.14%',
  }, {
    key: '2',
    class: '进阶班',
    classStatus: '进行中',
    startTime: '2017-04-21',
    teacher: '小白老师',
    classRate: '5/21',
    submitRate: '76.89%',
    review: '31.87%',
    clock: '5/21',
    satisfaction: '98.14%'
  },{
    key: '3',
    class: '提高班',
    classStatus: '进行中',
    startTime: '2017-04-22',
    teacher: '小白老师',
    classRate: '13/21',
    submitRate: '13.89%',
    review: '21.76%',
    clock: '13/21',
    satisfaction: '88.01%'
  },{
    key: '4',
    class: '入门班',
    classStatus: '进行中',
    startTime: '2017-04-23',
    teacher: '小白老师',
    classRate: '20/21',
    submitRate: '98.45%',
    review: '98.67%',
    clock: '20/21',
    satisfaction: '30.10%'
  },{
    key: '5',
    class: '体验班',
    classStatus: '已结束',
    startTime: '2017-04-24',
    teacher: '小白老师',
    classRate: '21/21',
    submitRate: '31.54%',
    review: '78.76%',
    clock: '21/21',
    satisfaction: '94.10%'
  }
],
columns: [{
    title: '班级',
    dataIndex: 'class',
    key: 'class',
    render: text => <div><Icon type="exclamation-circle" />{text}</div>
  }, {
    title: '课程状态',
    dataIndex: 'classStatus',
    key: 'classStatus',
  }, {
    title: '开课时间',
    dataIndex: 'startTime',
    key: 'startTime',
  },
  {
    title: '老师',
    dataIndex: 'teacher',
    key: 'teacher',
    render: text => <div><Icon type="smile" />{text}</div>
  },
  {
    title: '上课率',
    dataIndex: 'classRate',
    key: 'classRate',
  },
  {
    title: '作业提交率',
    dataIndex: 'submitRate',
    key: 'submitRate',
  },
  {
    title: '被点评情况',
    dataIndex: 'review',
    key: 'review',
  },
  {
    title: '打卡率',
    dataIndex: 'clock',
    key: 'clock',
  },
  {
    title: '满意度',
    dataIndex: 'satisfaction',
    key: 'satisfaction',
  },
],


dataSource2: [{
    key: '1',
    class: '高级班',
    classStatus: '已结束',
    startTime: '2017-04-30',
    teacher: '小白老师',
    classRate: '21/21',
    submitRate: '8/10',
    review: '10/10',
    clock: '5/21',
    satisfaction: '90.00%'
  }
],
columns2: [{
    title: '班级',
    dataIndex: 'class',
    key: 'class',
  }, {
    title: '课程状态',
    dataIndex: 'classStatus',
    key: 'classStatus',
  }, {
    title: '开课时间',
    dataIndex: 'startTime',
    key: 'startTime',
  },
  {
    title: '教学组负责人',
    dataIndex: 'teacher',
    key: 'teacher',
  },
  {
    title: '上课率',
    dataIndex: 'classRate',
    key: 'classRate',
  },
  {
    title: '作业提交率',
    dataIndex: 'submitRate',
    key: 'submitRate',
  },
  {
    title: '被点评情况',
    dataIndex: 'review',
    key: 'review',
  },
  {
    title: '打卡率',
    dataIndex: 'clock',
    key: 'clock',
  },
  {
    title: '满意度',
    dataIndex: 'satisfaction',
    key: 'satisfaction',
  },
],
}

export default function tableMessage(state = initState,action){
    switch(action.type){
        
        default:
            return state;
    }
}