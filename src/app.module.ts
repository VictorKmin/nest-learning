import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { variables } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `${variables.NODE_ENV}.env` }),
    MongooseModule.forRoot(variables.MONGO_URL),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
