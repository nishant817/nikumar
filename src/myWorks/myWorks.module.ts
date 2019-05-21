import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { myWorksRoutes } from './myWorks.route'

import { MyWorksComponent } from './myWorks.component';
import { ToDoReactComponent } from '../toDoReact/toDoReact.component';
import  { ToDoVueComponent } from '../toDoVue/toDoVue.component'

@NgModule({
   imports: [
      CommonModule, // instead of browser module
      RouterModule.forChild(myWorksRoutes),
   ],
   declarations: [
      MyWorksComponent,
      ToDoReactComponent,
      ToDoVueComponent
   ],
   providers: []
})
export class MyWorksModule { }