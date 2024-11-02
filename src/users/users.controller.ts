import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RegisterDto } from './entity/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.usersService.findAll();
  }

  @Post('register')
  async register(
    @Body()
    body: RegisterDto,
  ) {
    return this.usersService.create(body);
  }

  @Get('get-current')
  @UseGuards(JwtAuthGuard)
  async getCurrentUser(@Request() req) {
    const userId = req.user.userId;
    return this.usersService.findById(userId);
  }
}
