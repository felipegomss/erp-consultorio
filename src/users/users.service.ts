import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash } from 'bcryptjs';
import { PrismaService } from 'src/_prisma/prisma.service';
import { RegisterDto } from './entity/users.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async create(data: RegisterDto): Promise<User> {
    const hashedPassword = await hash(data.password, 10);
    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    if (!email) {
      throw new Error('Email is required');
    }
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findById(userId: string): Promise<User> {
    if (!userId) {
      throw new Error('UserId is required');
    }
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
