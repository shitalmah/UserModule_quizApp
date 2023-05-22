import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { SingleChoiceComponent } from './single-choice/single-choice.component';

const routes: Routes = [
  {
     path: 'login', component: LoginComponent 
  },
  {
    path: 'userdetails', component: UserDetailComponent 
 },
 {
  path: 'singlechoice', component: SingleChoiceComponent 
},
 {
  path:'',redirectTo:'login',pathMatch:'full'
 },
 {
  path:'**',component:PagenotFoundComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
