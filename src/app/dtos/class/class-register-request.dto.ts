import { CourseListResponseDto } from "../course/course-list-response.dto";


export abstract class ClassRegisterRequestDto {
  name: string;
  days: string;
  hourStart: string;
  hourEnd: string;
  numberPlaces: number;
  course: CourseListResponseDto;
  teacher: string;
  registrationDate: Date;
}