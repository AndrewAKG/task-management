import { Injectable, HttpService } from '@nestjs/common';
import { clientId, clientSecret } from '../env';

@Injectable()
export class GithubAuthService {
  constructor(private httpService: HttpService){}

  signInWithGithub(){
    this.httpService.get(`https://github.com/login/oauth/authorize?client_id=${clientId}`);
  }

  async signInCallback(code: string){
    if(!code){
      return {
        message: 'Error no code',
        success: false
      }
    }

    const response = await this.httpService.post('https://github.com/login/oauth/access_token', {
      client_id: clientId,
      client_secret: clientSecret,
      code
    }).toPromise();
    console.log('response', response.data);
    return response.data;
  }
}
