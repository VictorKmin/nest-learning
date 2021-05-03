import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'Dimas' })
  readonly name: string;

  @ApiProperty({ example: 'dimas@gmail.com' })
  readonly email: string;

  @ApiProperty({ example: 'Hell0WOr1d' })
  readonly password: string;
}
