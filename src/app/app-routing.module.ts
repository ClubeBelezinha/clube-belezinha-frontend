import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotCodeComponent } from './auth/forgot-code/forgot-code.component';
import { ForgotNewpasswordComponent } from './auth/forgot-newpassword/forgot-newpassword.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginTwofaComponent } from './auth/login-twofa/login-twofa.component';
import { LoginComponent } from './auth/login/login.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'sign-up', component:SingUpComponent},
  {path:'2fa', component:LoginTwofaComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'forgot-code', component:ForgotCodeComponent},
  {path:'forgot-newpassword', component:ForgotNewpasswordComponent},
  {
    path: 'pages',
    loadChildren: () =>
      import('./logged/logged.module')
        .then(a => a.LoggedModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
