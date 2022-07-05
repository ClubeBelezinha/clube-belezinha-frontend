import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthenticateRequestDto } from "../app/dtos/authenticate/authenticate-request.dto";
import { AuthenticateResponseDto } from "../app/dtos/authenticate/authenticate-response.dto";
import { AuthetincatedUserDto } from "../app/dtos/authenticate/authenticated-user.dto";
import { catchError, map } from "rxjs/operators";
import LocalStorageUtil, { LocalStorageKeys } from "../util/localStorage.util";
import { BaseService } from "./base.service";

@Injectable()
export class AuthenticationService extends BaseService {

    url: string = `${environment.apis.accessControl}authentication`;

    constructor(
        private httpClient: HttpClient,
    ) {
        super();
    }
    authenticate(dto: AuthenticateRequestDto): Observable<AuthenticateResponseDto> {
        return this.httpClient
            .post(`${this.url}/authenticate`, dto, this.anonymousHeader())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            );
    }
    setAuthenticatedUser(dto: AuthetincatedUserDto) {
        LocalStorageUtil.set(LocalStorageKeys.user, dto);
    }
    getAuthenticatedUser(): AuthetincatedUserDto {
        return LocalStorageUtil.get(LocalStorageKeys.user);
    }

}
