import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserDocument } from '../dataBase/User.schema';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserDto } from '../dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @Post('/')
  getHello(@Body() user: UserDto): Promise<UserDocument> {
    return this.usersService.createUser(user);
  }

  @Get('/')
  getUsers(): Promise<UserDocument[]> {
    return this.usersService.getHello();
  }
}
