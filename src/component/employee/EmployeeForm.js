import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const EmployeeForm = ({ employee, allManagers, ratingOptions, onSave, onChange, loading, errors }) => {
  return (
    <form>
      <h1>Manage Employee</h1>
      <TextInput
        name="title"
        label="Title"
        value={employee.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="managerId"
        label="Manager"
        value={employee.managerId}
        defaultOption="Select Manager"
        options={allManagers}
        onChange={onChange}
        error={errors.managerId}/>

      <TextInput
        name="technology"
        label="Technology"
        value={employee.technology}
        onChange={onChange}
        error={errors.technology}/>

      <SelectInput
        name="Rating"
        label="Rating"
        value={employee.rating}
        defaultOption="Select Rating"
        options={ratingOptions}
        onChange={onChange}
        error={errors.rating}/>

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

EmployeeForm.propTypes = {
  employee: PropTypes.object.isRequired,
  allManagers: PropTypes.array.isRequired,
  ratingOptions: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default EmployeeForm;
