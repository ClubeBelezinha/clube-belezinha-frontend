import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ClassChangeResponseDto } from "src/app/dtos/class/class-change-response.dto";
import { ClassListResponseDto } from "src/app/dtos/class/class-list-response.dto";
import { ClassRegisterRequestDto } from "src/app/dtos/class/class-register-request.dto";
import { ClassChangeRequestDto } from "src/app/dtos/class/class-update-request.dto";

import { StudentClassListResponseDto } from "src/app/dtos/studentClass/student-class-list-response.dto";
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

  getClassList(): Observable<StudentClassListResponseDto[]> {
    return this.httpClient
      .get(`${this.url}class/list`, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  getClassById(id: string): Observable<ClassListResponseDto[]> {
    return this.httpClient
      .get(`${this.url}class/id/${id}`, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  getClassByUser(): Observable<ClassListResponseDto[]> {
    return this.httpClient
      .get(`${this.url}class/byUser/`, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  registerClass(dto: ClassRegisterRequestDto): Observable<ClassRegisterRequestDto> {
    return this.httpClient
      .post(`${this.url}/class/registerClass`, dto, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  updateClass(dto: ClassChangeRequestDto): Observable<ClassChangeResponseDto> {
    return this.httpClient
      .put(`${this.url}class`,
        dto, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }


  deleteClass(_id: string): Observable<any> {
    return this.httpClient.delete(`${this.url}/class/id/${_id}`, this.authorizedHeader()).pipe(map(this.extractData), catchError(this.serviceError));
  }

}
