import { Injectable } from '@nestjs/common';
import { AuthDto } from '../dto/auth.dto';
import { UserDto } from '../dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../dataBase/User.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  login(authDto: AuthDto) {
    return;
  }

  register(userDto: Partial<UserDto>) {
    return;
  }
}
