import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './component/App';
import HomePage from './component/Home/HomePage';
import AboutPage from './component/About/AboutPage';
import CoursesPage from './component/courses/CoursesPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="courses" component={CoursesPage} />
    </Route>
);
