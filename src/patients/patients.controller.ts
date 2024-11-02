import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PatientDto } from './entity/patients.dto';
import { PatientsService } from './patients.service';

@Controller('patients')
@UseGuards(JwtAuthGuard)
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get()
  async getPatients() {
    return this.patientsService.getAllPatients();
  }

  @Post()
  async createPatient(
    @Body()
    patient: PatientDto,
    @Request() req,
  ) {
    const userId = req.user.userId;
    return this.patientsService.createPatient(patient, userId);
  }
}
