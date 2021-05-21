import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private END_POINT = `${environment.baseUrl}${environment.employeeApiUrl}/ipd-patient-info`;
  private CREATE_EMPLOYEE_URL = `${this.END_POINT}/find-doctor-wise-dtl`;

  constructor(private http: HttpClient) { }

  createEmployee(reqObj: any): Observable<any> {
    return this.http.post(this.CREATE_EMPLOYEE_URL, reqObj).pipe(
      map((data: any) => data
      ));
  }
}
