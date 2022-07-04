export abstract class CourseChangeRequestDto {
  name?: string;
  workload?: string;
  expiration?: string;
  description?: string;
  value?: number;
  registrationDate?: Date;
  status?: string;
}
