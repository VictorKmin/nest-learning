import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { variables } from '../config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      secret: variables.JWT_SECRET,
      signOptions: { expiresIn: '10m' },
    }),
  ],
})
export class AuthModule {}
