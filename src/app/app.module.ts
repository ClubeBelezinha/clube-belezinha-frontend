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
import { UserService } from 'src/service/user.service';
import { ClassService } from 'src/service/class.service';
import { StudentClassService } from 'src/service/studentClass.service';
import { ClassesPageComponent } from './auth/class-page/classes-page.component';
import { StudentClassesPageComponent } from './auth/student-class-page/student-classes-page.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    CoursesPageComponent,
    SubscriptionPageComponent,
    MyCoursesComponent,
    ClassesPageComponent,
    StudentClassesPageComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [AuthenticationService, CourseService, UserService, ClassService, StudentClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
