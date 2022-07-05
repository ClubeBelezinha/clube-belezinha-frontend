import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/service/course.service';
import LocalStorageUtil, { LocalStorageKeys } from 'src/util/localStorage.util';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})

export class CoursesPageComponent implements OnInit {

  
  courses = [];


  constructor(
    private courseService: CourseService,
  ) { 
  }

  ngOnInit(): void {
    
    this.courseService.getCourseList().subscribe(
      success => {
        console.log(success);
        this.courses = success;
      },
      error => console.log(error)
    );

  }

}
function jwt_decode(accessToken: any): any {
  throw new Error('Function not implemented.');
}

