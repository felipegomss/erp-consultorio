import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/_prisma/prisma.service';
import { PatientDto } from './entity/patients.dto';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  async getAllPatients() {
    return this.prisma.patient.findMany();
  }

  async createPatient(patient: PatientDto, userId: string) {
    console.log(patient);
    const patientData: Prisma.PatientCreateInput = {
      ...patient,
      user: {
        connect: { id: userId },
      },
    };

    return this.prisma.patient.create({
      data: patientData,
    });
  }
}
