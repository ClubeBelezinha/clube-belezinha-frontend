import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveComponent } from './approve/approve.component';
import { BalanceComponent } from './balance/balance.component';
import { BuyTokenComponent } from './buy-token/buy-token.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DecreaseComponent } from './decrease/decrease.component';
import { DepositComponent } from './deposit/deposit.component';
import { IncreaseComponent } from './increase/increase.component';
import { LoggedComponent } from './logged.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransferComponent } from './transfer/transfer.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';

const routerConfig: Routes = [
  {
    path: '',
    component: LoggedComponent,
    children: [
      {
        path: 'logged/dashboard',
        component: DashboardComponent /*, canActivate: [AuthenticationGuard] */,
      },
      {
        path: 'logged/profile',
        component: ProfileComponent /*, canActivate: [AuthenticationGuard] */,
      },
      {
        path: 'logged/deposit',
        component: DepositComponent /*, canActivate: [AuthenticationGuard] */,
      },
      {
        path: 'logged/balance',
        component: BalanceComponent /*, canActivate: [AuthenticationGuard] */,
      },
      {
        path: 'logged/transactions',
        component: TransactionsComponent /*, canActivate: [AuthenticationGuard] */,
      },
      {
        path: 'logged/buy',
        component: BuyTokenComponent /*, canActivate: [AuthenticationGuard] */,
      },
      {
        path: 'logged/withdrawal',
        component: WithdrawalComponent /*, canActivate: [AuthenticationGuard] */,
      },
      {
        path: 'logged/transfer',
        component: TransferComponent /*, canActivate: [AuthenticationGuard] */,
      },
      {
        path: 'logged/approve',
        component: ApproveComponent /*, canActivate: [AuthenticationGuard] */,
      },
      {
        path: 'logged/increase',
        component: IncreaseComponent /*, canActivate: [AuthenticationGuard] */,
      },
      {
        path: 'logged/decrease',
        component: DecreaseComponent /*, canActivate: [AuthenticationGuard] */,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routerConfig)],
  exports: [RouterModule],
})
export class LoggedRouteModule { }
