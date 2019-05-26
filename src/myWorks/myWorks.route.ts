import { MyWorksComponent } from './myWorks.component';
import { ToDoReactComponent } from '../toDoReact/toDoReact.component';
import  { ToDoVueComponent } from '../toDoVue/toDoVue.component'

export const myWorksRoutes = [

   { 
      path: '', 
      component: MyWorksComponent,
      children: [
         { path: 'todoreact', component: ToDoReactComponent},
         { path: 'todovue', component: ToDoVueComponent },
      ]
   },
   // { path: 'myworks/todoreact', component: ToDoReactComponent, outlet: "works"},
   // { path: 'myworks/todovue', component: ToDoVueComponent, outlet: "works" },
]