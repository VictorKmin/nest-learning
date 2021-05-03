import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({ example: 'Dima', description: 'User name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 'dima@gmail.com', description: 'User email' })
  @Prop({ required: true })
  email: string;

  @ApiProperty({ example: '1234567' })
  @Prop({ min: 10, select: false })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
