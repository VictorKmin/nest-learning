import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from '../dataBase/User.schema';
import { UserDto } from '../dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  getHello(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }
  createUser(user: UserDto): Promise<UserDocument> {
    return this.userModel.create(user);
  }
}
