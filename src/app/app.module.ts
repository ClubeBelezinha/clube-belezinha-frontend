import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { LoginComponent } from './auth/login/login.component';
import { LoggedModule } from './logged/logged.module';
import { LoginTwofaComponent } from './auth/login-twofa/login-twofa.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ForgotCodeComponent } from './auth/forgot-code/forgot-code.component';
import { ForgotNewpasswordComponent } from './auth/forgot-newpassword/forgot-newpassword.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SingUpComponent,
    LoginComponent,
    LoginTwofaComponent,
    ForgotPasswordComponent,
    ForgotCodeComponent,
    ForgotNewpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoggedModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
