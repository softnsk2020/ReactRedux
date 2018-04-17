import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const EmployeeListRow = ({employee}) => {
  return (
    <tr>
      <td><Link to={'/employees/' + employee.id}>{employee.title}</Link></td>
      <td>{employee.managerId}</td>
      <td>{employee.noOfYears}</td>
      <td>{employee.technology}</td>
      <td>{employee.PMSYear}</td>
      <td>{employee.Rating}</td>
    </tr>
  );
};

EmployeeListRow.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeListRow;
