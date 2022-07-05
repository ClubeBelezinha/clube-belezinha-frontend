import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesPageComponent } from './auth/class-page copy/classes-page.component';
import { CoursesPageComponent } from './auth/courses-page/courses-page.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { MyCoursesComponent } from './auth/my-courses/my-courses.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SubscriptionPageComponent } from './auth/subscription-page/subscription-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: CoursesPageComponent },
  { path: 'subscription', component: SubscriptionPageComponent },
  { path: 'my-courses', component: MyCoursesComponent },
  { path: 'classes', component: ClassesPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
