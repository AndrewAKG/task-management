import { Injectable, HttpService } from '@nestjs/common';
import { clientId, clientSecret } from '../env';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GithubAuthService {
  constructor(private httpService: HttpService, private jwtService: JwtService) {}

  async signInCallback(code: string) {
    if (!code) {
      return {
        message: 'Error no code',
        success: false,
      };
    }

    const response = await this.httpService
      .post(
        'https://github.com/login/oauth/access_token',
        {
          client_id: clientId,
          client_secret: clientSecret,
          code,
        },
        { headers: { Accept: 'application/json' } },
      )
      .toPromise();
    const payload = { accessToken: response.data.access_token };
    const accessToken = this.jwtService.sign(payload);
    return accessToken;
  }
}
