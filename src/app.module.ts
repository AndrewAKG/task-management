import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { GithubAuthModule } from './github-auth/github-auth.module';

@Module({
  imports: [TasksModule, GithubAuthModule]
})
export class AppModule {}
