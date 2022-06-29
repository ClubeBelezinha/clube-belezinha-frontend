
import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "../app.component";
import { LoggedComponent } from "./logged.component";
import { LoggedRouteModule } from "./logged.route";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { BalanceComponent } from './balance/balance.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BuyTokenComponent } from './buy-token/buy-token.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { TransferComponent } from './transfer/transfer.component';
import { ApproveComponent } from './approve/approve.component';
import { IncreaseComponent } from './increase/increase.component';
import { DecreaseComponent } from './decrease/decrease.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    SideBarComponent,
    LoggedComponent,
    BalanceComponent,
    TransactionsComponent,
    BuyTokenComponent,
    WithdrawalComponent,
    TransferComponent,
    ApproveComponent,
    IncreaseComponent,
    DecreaseComponent,
    ProfileComponent
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