import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/_prisma/prisma.module';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';

@Module({
  imports: [PrismaModule],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
