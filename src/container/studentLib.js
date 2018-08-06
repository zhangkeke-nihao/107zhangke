import React, { Component } from 'react';
import '../App.css';
import Search from '../components/studentLib/search'
import StudentTable from '../components/studentLib/StudentTable'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action';


class StudenLib extends Component {
  componentDidMount(){  
    const { Actions,params } = this.props;
    const { id } = params
    Actions.fetchStudentInfo(id)
  }
 
  render() {
    const { studentTables } = this.props;
    return (
      <div className="wrap">
          <Search />
          <StudentTable StudentList={studentTables.StudentList} />
      </div>
    );
  }
}


function mapStateToProps(state){
    const { studentTables } = state;
    const props = { studentTables };
    return props;
} 
const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StudenLib);
  
  



 




