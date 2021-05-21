import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { EmployeeModel } from '../_core/model/employee.model';
import { EmployeeService } from '../_core/service/employee.service';
import { GradeService } from '../_core/service/grade.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeModel: EmployeeModel = new EmployeeModel();
  gradeList: any;

  constructor(
    private gradeService: GradeService,
    private employeeService: EmployeeService,
    // private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.findGradeList();
  }

  findGradeList(){
    this.gradeService.findGradeList({}).subscribe(
      res =>{
        if(res.success && res.items){
          this.gradeList = res.items;
        }
      },
      err =>{
        console.log('grade list err', err);
      }
    );
  }

  createEmployee(){
    this.employeeService.createEmployee(this.employeeModel).subscribe(
      res =>{
        if(res.success ){
          // this.toastr.success(res.message)
        }
      },
      err =>{
        console.log('grade list err', err);
      }
    );
  }

}
