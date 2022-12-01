import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    UsersModule,
    AuthModule,
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
