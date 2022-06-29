
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "../app.component";
import { LoggedComponent } from "./logged.component";
import { LoggedRouteModule } from "./logged.route";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DashboardComponent } from "./dashboard/dashboard.component";


@NgModule({
  declarations: [
    LoggedComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LoggedRouteModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    // httpInterceptorsProviders,
  ],
  schemas: [],
  bootstrap: [AppComponent],
})
export class LoggedModule { }