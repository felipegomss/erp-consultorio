import { IsDate, IsOptional, IsString } from 'class-validator';

export class PatientDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  phone: string;

  @IsDate()
  birthDate: Date;

  @IsString()
  @IsOptional()
  address?: string;
}
