import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { comparePassword } from 'src/common/utils';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne({ email });
    const matchedPassword = await comparePassword(password, user.password);
    if (user && matchedPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(body: LoginDto) {
    const user = await this.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { email: user.email, userId: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(body: CreateUserDto) {
    const res = await this.usersService.create(body);
    const { password, ...rest } = res;
    return {
      data: rest,
      message: 'User signup successfully',
    };
  }
}
