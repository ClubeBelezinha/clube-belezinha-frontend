import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedComponent } from './logged.component';

const routerConfig: Routes = [
  {
    path: '',
    component: LoggedComponent,
    children: [
      {
        path: 'logged/dashboard',
        component: DashboardComponent /*, canActivate: [AuthenticationGuard] */,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routerConfig)],
  exports: [RouterModule],
})
export class LoggedRouteModule { }
