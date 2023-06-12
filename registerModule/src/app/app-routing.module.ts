import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { ChangeComponent } from './change/change.component';

const routes: Routes = [
  { path:'signup', component: SignupComponent },
  {path:'login', component:LoginComponent},
  // {path:'forget',component:ForgetComponent},
  {path:'change/:token',component:ChangeComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
