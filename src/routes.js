import ActionSheetWrap from './container/ActionSheetWrap'
import DialogWrap from './container/DialogWrap'
import ProgressWrap from './container/ProgressWrap'
import SliderWrap from './container/SliderWrap'
import SwitchWrap from './container/SwitchWrap'
import AppWrap from './container/AppWrap'
const routes = [{
    path: '/',
    component: AppWrap,
    indexRoute: { component: ActionSheetWrap },
    childRoutes: [
      { path: 'dialogWrap', component: DialogWrap },
      { path: 'progressWrap', component: ProgressWrap },
      { path: 'sliderWrap', component: SliderWrap },
      { path: 'switchWrap', component: SwitchWrap },
      

    ]
}]

export default routes;