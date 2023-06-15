import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthRegisterDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
export class AuthLoginDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
