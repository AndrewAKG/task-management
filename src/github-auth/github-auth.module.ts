import { Module, HttpModule } from '@nestjs/common';
import { GithubAuthController } from './github-auth.controller';
import { GithubAuthService } from './github-auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topsecret51',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    HttpModule,
  ],
  controllers: [GithubAuthController],
  providers: [GithubAuthService, JwtStrategy],
  exports: [PassportModule, JwtStrategy],
})
export class GithubAuthModule {}
