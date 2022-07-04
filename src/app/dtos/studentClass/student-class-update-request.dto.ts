import { ClassListResponseDto } from "../class/class-list-response.dto";
import { CourseListResponseDto } from "../course/course-list-response.dto";
import { UserListResponseDto } from "../user/user-list-response.dto";


export abstract class StudentClassChangeRequestDto {
  grade?: string;
  class?: ClassListResponseDto;
  course?: CourseListResponseDto;
  user?: UserListResponseDto;
}
