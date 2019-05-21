import { MyWorksComponent } from './myWorks.component';
import { ToDoReactComponent } from '../toDoReact/toDoReact.component';
import  { ToDoVueComponent } from '../toDoVue/toDoVue.component'

export const myWorksRoutes = [
   { path: 'todoreact', component: ToDoReactComponent},
   { path: 'todovue', component: ToDoVueComponent },
   { path: '', component: MyWorksComponent }
]