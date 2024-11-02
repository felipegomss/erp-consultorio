import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from 'src/users/entity/users.dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('auth/login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
