export class AuthetincatedUserDto {

    constructor(
        public email: string,
        public token: Token,
    ) {
    }
}

class Token {
    accessToken: string | undefined;
    expiresIn: string | undefined;
}
