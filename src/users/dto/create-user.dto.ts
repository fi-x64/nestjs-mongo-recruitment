import { IsEmail, IsNotEmpty } from 'class-validator';

// data transfer object // class = {}
export class CreateUserDto {
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  @IsNotEmpty({
    message: 'Email không được để trống',
  })
  email: string;

  @IsNotEmpty()
  password: string;

  name: string;
  address: string;
}
