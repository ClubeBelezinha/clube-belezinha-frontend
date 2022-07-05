import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BaseService } from "./base.service";
import { catchError, map } from "rxjs/operators";
import { UserRegisterRequestResponseDto } from "../app/dtos/user/user-register-request-response.dto";
import { UserRegisterResponseDto } from "../app/dtos/user/user-register-response.dto";

@Injectable()
export class UserService extends BaseService {

    url: string = `${environment.apis.accessControl}user`;

    constructor(private httpClient: HttpClient) {
        super();
    }

    register(dto: UserRegisterRequestResponseDto): Observable<UserRegisterResponseDto> {
        return this.httpClient
            .post(`${this.url}/registerUser`, dto)
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            );
    }
}
