import { Module, HttpModule } from '@nestjs/common';
import { GithubAuthController } from './github-auth.controller';
import { GithubAuthService } from './github-auth.service';

@Module({
  imports: [HttpModule],
  controllers: [GithubAuthController],
  providers: [GithubAuthService]
})
export class GithubAuthModule {}
