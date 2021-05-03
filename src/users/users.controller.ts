import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDocument } from '../dataBase/User.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/one')
  getHello(): Promise<UserDocument[]> {
    return this.usersService.getHello();
  }

  @Get('/two')
  getUsers(): Array<any> {
    return [{ id: 1, name: 2 }];
  }
}
