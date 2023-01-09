import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsString()
    @ApiProperty()
    password: string;

    @IsString()
    @ApiProperty()
    firstName: string;

    @IsString()
    @ApiProperty()
    lastName: string;

    @IsString()
    @ApiProperty()
    dob: string;
}
