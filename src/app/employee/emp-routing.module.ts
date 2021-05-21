import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { GradeComponent } from './grade/grade.component';
import { HomeComponent } from './home/home.component';
import { EmpAccountComponent } from './emp-account/emp-account.component';
import { CompanyAccountComponent } from './company-account/company-account.component';
import { PaySalaryComponent } from './pay-salary/pay-salary.component';
import { SalarySheetComponent } from './salary-sheet/salary-sheet.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'grade',
    component: GradeComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'emp-account',
    component: EmpAccountComponent,
  },
  {
    path: 'company-account',
    component: CompanyAccountComponent,
  },
  {
    path: 'pay-salary',
    component: PaySalaryComponent,
  },
  {
    path: 'salary-sheet',
    component: SalarySheetComponent,
  },
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmpRoutingModule { }
