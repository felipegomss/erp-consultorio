import { Module } from '@nestjs/common';
import { PrismaModule } from './_prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, PrismaModule, AuthModule, PatientsModule],
})
export class AppModule {}
