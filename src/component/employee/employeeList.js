import React, { PropTypes } from 'react';
import EmployeeListRow from './employeeListRow';

const EmployeesList = ({employees}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Manager Name</th>
        <th>No Of Years</th>
        <th>Technology</th>
        <th>PMSYear</th>
        <th>Rating</th>
      </tr>
      </thead>
      <tbody>
      {employees.map(employee =>
        <EmployeeListRow key={employee.id} employee={employee}/>
      )}
      </tbody>
    </table>
  );
};

EmployeesList.propTypes = {
  employees: PropTypes.array.isRequired
};

export default EmployeesList;
