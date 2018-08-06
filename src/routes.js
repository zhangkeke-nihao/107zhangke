import LessonContent from './container/LessonContent'
import ClassDetail from './container/classDetail'
import StudenLib from './container/studentLib'
import AppWrapper from './container/AppWrapper'

const routes = [{
    path: '/',
    component: AppWrapper,
    indexRoute: { component: StudenLib },
    childRoutes: [
      { path: 'studenLib', component: StudenLib },
      { path: 'lessonContent/:mid', component: LessonContent },
      { path: 'classDetail', component: ClassDetail },
    ]
}]

export default routes;