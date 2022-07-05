import { CourseListResponseDto } from "../course/course-list-response.dto";

export abstract class StudentClassListResponseDto {
  _id: string;
  name: string;
  days: string;
  hourStart: string;
  hourEnd: string;
  numberPlaces: number;
  course: CourseListResponseDto;
  teacher: string;
  registrationDate: Date;
}
