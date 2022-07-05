import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CoursesPageComponent } from './auth/courses-page/courses-page.component';
import { AuthenticationService } from 'src/service/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { SubscriptionPageComponent } from './auth/subscription-page/subscription-page.component';
import { MyCoursesComponent } from './auth/my-courses/my-courses.component';
import { CourseService } from 'src/service/course.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    CoursesPageComponent,
    SubscriptionPageComponent,
    MyCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
