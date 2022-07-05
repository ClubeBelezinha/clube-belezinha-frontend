import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { StudentClassChangeResponseDto } from "src/app/dtos/studentClass/student-class-change-response.dto";
import { StudentClassListResponseDto } from "src/app/dtos/studentClass/student-class-list-response.dto";
import { StudentClassRegisterRequestDto } from "src/app/dtos/studentClass/student-class-register-request.dto";
import { StudentClassChangeRequestDto } from "src/app/dtos/studentClass/student-class-update-request.dto";
import { environment } from "src/environments/environment";
import { BaseService } from "./base.service";

@Injectable()
export class ClassService extends BaseService {

  url: string = `${environment.apis.accessControl}`;

  constructor(
    private httpClient: HttpClient,
  ) {
    super();
  }

  getStudentClassList(): Observable<StudentClassListResponseDto[]> {
    return this.httpClient
      .get(`${this.url}studentClass/list`, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  getStudentClassById(id: string): Observable<StudentClassListResponseDto> {
    return this.httpClient
      .get(`${this.url}/studentClass/id/${id}`, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  getStudentByClass(id: string): Observable<StudentClassListResponseDto> {
    return this.httpClient
      .get(`${this.url}/studentClass/listByClass/${id}`, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  registerStudentClass(dto: StudentClassRegisterRequestDto): Observable<StudentClassRegisterRequestDto> {
    return this.httpClient
      .post(`${this.url}/studentClass/registerStudentClass`, dto, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  updateStudentClass(_id: string, dto: StudentClassChangeRequestDto): Observable<StudentClassChangeResponseDto> {
    return this.httpClient
      .patch(`${this.url}/studentClass/${_id}`,
        dto, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }


  deleteCourse(_id: string): Observable<any> {
    return this.httpClient.delete(`${this.url}/course/id/${_id}`, this.authorizedHeader()).pipe(map(this.extractData), catchError(this.serviceError));
  }

}
