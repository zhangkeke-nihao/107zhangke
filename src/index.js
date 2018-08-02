import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import LessonContent from './container/LessonContent'
import ClassDetail from './container/classDetail'
import StudenLib from './container/studentLib'

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router'
const store = configureStore();


const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: StudenLib },
    childRoutes: [
      { path: 'lessonContent/:mid', component: LessonContent },
      { path: 'classDetail', component: ClassDetail },
      { path: 'studenLib', component: StudenLib }
    ]
}]

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
