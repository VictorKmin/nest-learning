import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({ example: 'dimas@gmail.com' })
  readonly email: string;

  @ApiProperty({ example: 'Hell0Wor1d' })
  readonly password: string;
}
