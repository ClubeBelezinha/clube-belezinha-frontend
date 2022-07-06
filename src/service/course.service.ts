import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { CourseChangeResponseDto } from "src/app/dtos/course/course-change-response.dto";
import { CourseListResponseDto } from "src/app/dtos/course/course-list-response.dto";
import { CourseRegisterRequestDto } from "src/app/dtos/course/course-register-request.dto";
import { CourseChangeRequestDto } from "src/app/dtos/course/course-update-request.dto";
import { environment } from "src/environments/environment";
import { BaseService } from "./base.service";

@Injectable()
export class CourseService extends BaseService {

  url: string = `${environment.apis.accessControl}`;

  constructor(
    private httpClient: HttpClient,
  ) {
    super();
  }

  getCourseList(): Observable<CourseListResponseDto[]> {
    return this.httpClient
      .get(`${this.url}course/list`, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  getCourseById(id: string): Observable<CourseListResponseDto[]> {
    return this.httpClient
      .get(`${this.url}course/id/${id}`, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  getCourseByStatus(status: string): Observable<CourseListResponseDto> {
    return this.httpClient
      .get(`${this.url}/course/listByStatus/${status}`, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  getById(_id: string): Observable<any> {
    return this.httpClient
      .get(`${this.url}/id/${_id}`, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  registerCourse(dto: CourseRegisterRequestDto): Observable<CourseRegisterRequestDto> {
    return this.httpClient
      .post(`${this.url}/course/registerCourse`, dto, this.authorizedHeader())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  updateCourse(_id: string, dto: CourseChangeRequestDto): Observable<CourseChangeResponseDto> {
    return this.httpClient
      .patch(`${this.url}/course/${_id}`,
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
