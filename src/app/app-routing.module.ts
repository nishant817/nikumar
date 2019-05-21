import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app/app.component';
import { AboutMeComponent } from '../aboutMe/aboutMe.component';
import { MyWorksComponent } from '../myWorks/myWorks.component';

const routes: Routes = [
  //{ path: '', component: AppComponent, resolve: {},  canActivate: [], canDeactivate: [] },,
  //{ path: 'myworks', component: MyWorksComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: '', redirectTo: '/aboutMe', pathMatch: 'full' },
  { path: 'myworks', loadChildren: '../myWorks/myWorks.module#MyWorksModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
