import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/service/class.service';
import { CourseService } from 'src/service/course.service';
import LocalStorageUtil, { LocalStorageKeys } from 'src/util/localStorage.util';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})

export class CoursesPageComponent implements OnInit {

  classes = [];

  constructor(
    private classService: ClassService,
  ) { 
  }

  ngOnInit(): void {

    this.classService.getClassList().subscribe(
      success => {
        console.log(success);
        this.classes = success;
      },
      error => console.log(error)
    );

  }

}
function jwt_decode(accessToken: any): any {
  throw new Error('Function not implemented.');
}

