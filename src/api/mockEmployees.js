import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const employees = [
  {
    id: "1001",
    title: "Employee 1",
    managerId: "cory-house",
    noOfYears: "5",
    technology: "JavaScript",
    PMSYear: "2018",
    Rating: ""
  },
  {
    id: "1002",
    title: "Employee 2",
    managerId: "cory-house",
    noOfYears: "5",
    technology: "JavaScript",
    PMSYear: "2018",
    Rating: ""
  },
  {
    id: "1003",
    title: "Employee 3",
    managerId: "cory-house",
    noOfYears: "5",
    technology: "JavaScript",
    PMSYear: "2018",
    Rating: ""
  },
  {
    id: "1004",
    title: "Employee 4",
    managerId: "cory-house",
    noOfYears: "5",
    technology: "JavaScript",
    PMSYear: "2018",
    Rating: ""
  },
  {
    id: "1005",
    title: "Employee 5",
    managerId: "cory-house",
    noOfYears: "5",
    technology: "JavaScript",
    PMSYear: "2018",
    Rating: ""
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

class EmployeeApi {
  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], employees));
      }, delay);
    });
  }

  static saveRating(employee) {
    employee = Object.assign({}, employee); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (employee.id) {
          const existingCourseIndex = employees.findIndex(a => a.id == employee.id);
          employees.splice(existingCourseIndex, 1, employee);
        }
        resolve(employee);
      }, delay);
    });
  }
}

export default EmployeeApi;
