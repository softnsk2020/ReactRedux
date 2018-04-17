import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ratingActions from '../../actions/ratingActions';
import EmployeeList from './employeeList';

class EmployeePage extends React.Component {
  constructor(props) {
    super(props);
  }

  courseRow(employee, index) {
    return <div key={index}>{employee.title}</div>;
  }

  render() {
    const {employees}=this.props;
    return (
      <div>
        <h1>Courses -Final</h1>
        <EmployeeList employees={employees}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    employees: state.employees
  };
}

function mapDispatchToProps(dispatch){
  return{
    //actions: bindActionCreators(ratingActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeePage);
