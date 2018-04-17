import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ratingActions from '../../actions/ratingActions';
import EmployeeForm from './EmployeeForm';

class ManageEmployeePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      employee: Object.assign({}, props.employee),
      errors: {}
    };
    this.updateEmployeeState = this.updateEmployeeState.bind(this);
    this.saveEmployee=this.saveEmployee.bind(this);
  }

  updateEmployeeState(evt) {
    const field = evt.target.name;
    let employee = Object.assign({}, this.state.employee);
    employee[field] = evt.target.value;
    this.setState({
      employee: employee
    });
  }

  saveEmployee(event){
    event.preventDefault();
    this.props.saveEmployee(this.state.employee);
  }

  render() {
    return (
      <div>
        <EmployeeForm
          allManagers={this.props.managers}
          employee={this.state.employee}
          errors={this.state.errors}
          ratingOptions={[]}
          onChange={this.updateEmployeeState}
          onSave={this.saveEmployee}
        />
      </div>
    );
  }
}

ManageEmployeePage.propTypes = {
  employee:PropTypes.object.isRequired,
  managers:PropTypes.array.isRequired,
  saveEmployee:PropTypes.object.isRequired
};

function getCourseById(employees, employeeId) {
  const employee = employees.find(employee => employee.id === employeeId);
  if (employee) return employee;
  return null;
}

function mapStateToProps(state, ownProps) {
  const employeeId = ownProps.params.id;
  let employee={id:'',title:'',managerId:'',noOfYears:'',technology:'',PMSYear:'',Rating:''};
  if (employeeId && state.employees.length > 0) {
    employee = getCourseById(state.employees, employeeId);
  }

  const managersFormattedForDropdown = state.managers.map(manager => {
    return {
      value: manager.id,
      text: manager.firstName + ' ' + manager.lastName
    };
  });

return{
  employee:employee,
  managers:managersFormattedForDropdown
};
}

function mapDispatchToProps(dispatch) {
return{
  saveEmployee: (employee) => dispatch(ratingActions.saveEmployee(employee))
};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEmployeePage);



