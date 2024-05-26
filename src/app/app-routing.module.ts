import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./components/customers/customers.component";
import {AccountsComponent} from "./components/accounts/accounts.component";
import {NewCustomerComponent} from "./components/new-customer/new-customer.component";
import {CustomersAcountsComponent} from "./components/customers-acounts/customers-acounts.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminTemplateComponent} from "./components/admin-template/admin-template.component";
import {AuthGuard} from "./guards/authentication.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {NotAuthorizedComponent} from "./components/not-authorized/not-authorized.component";

const routes: Routes = [
  { path :"login", component : LoginComponent},
  { path :"", redirectTo : "/login", pathMatch : "full"},
  {path:"admin",component:AdminTemplateComponent, canActivate: [AuthGuard],
    children :[
      { path :"customer-accounts/:id", component : CustomersAcountsComponent},
      {path: "accounts", component: AccountsComponent},
      {path: "customers", component: CustomersComponent},
      {path: "notAuthorized", component: NotAuthorizedComponent},
      { path :"new-customer", component : NewCustomerComponent, canActivate: [AuthorizationGuard], data : {role:"ADMIN"}},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
