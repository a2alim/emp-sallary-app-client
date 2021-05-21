import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private END_POINT = `${environment.baseUrl}${environment.employeeApiUrl}/grade`;
  private GRADE_LIST = `${this.END_POINT}/list`;

  constructor(private http: HttpClient) { }

  findGradeList(reqObj: any): Observable<any> {
    return this.http.get(this.GRADE_LIST, reqObj).pipe(map((data: any) => data ));
  }


}
