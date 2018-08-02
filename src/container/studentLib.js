import React, { Component } from 'react';
import '../App.css';
import Search from '../components/studentLib/search'
import StudentTable from '../components/studentLib/StudentTable'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action';


class StudenLib extends Component {
  componentDidMount(){   
    const { Actions } = this.props;
    const id = 1
    Actions.fetchStudentInfo(id)
  }
 
  render() {
    const {tableMessage} = this.props;
    console.log(tableMessage)
    return (
      <div className="wrap">
          <Search />
          <StudentTable StudentList={tableMessage.StudentList} />
      </div>
    );
  }
}


function mapStateToProps(state){
    const {tableMessage} = state;
    const props = {tableMessage};
    return props;
  }  
  
const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch),
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(StudenLib);
  
  



 




