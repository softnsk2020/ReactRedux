import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './component/App';
import HomePage from './component/Home/HomePage';
import AboutPage from './component/About/AboutPage';
import EmployeePage from './component/employee/employeePage';
import ManageEmployeePage from './component/employee/manageEmployeePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="employees" component={EmployeePage} />
        <Route path="employees/:id" component={ManageEmployeePage} />
    </Route>
);
