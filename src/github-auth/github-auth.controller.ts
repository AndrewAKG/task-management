import { Controller, Get, Query } from '@nestjs/common';
import { GithubAuthService } from './github-auth.service';

@Controller('github-auth')
export class GithubAuthController {
  constructor(private githubAuthService: GithubAuthService) {}

  @Get('/signin')
  signInWithGithub(){
    this.githubAuthService.signInWithGithub();
  }

  @Get('/signin/callback')
  signInCallback(@Query('code') code){
    return this.githubAuthService.signInCallback(code);
  }
}
