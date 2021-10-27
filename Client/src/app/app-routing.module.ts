import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { NewAdmissionComponent } from './new-admission/new-admission.component';
import { PaidComponent } from './paid/paid.component';
import { UnpaidComponent } from './unpaid/unpaid.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'details',component:DetailsComponent},
  {path:'new-admission',component:NewAdmissionComponent},
  {path:'details/paid',component:PaidComponent},
  {path:'details/unpaid',component:UnpaidComponent},
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent}
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
