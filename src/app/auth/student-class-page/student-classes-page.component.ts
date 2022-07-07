import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/service/class.service';
import { StudentClassService } from 'src/service/studentClass.service';

@Component({
  selector: 'app-student-classes-page',
  templateUrl: './student-classes-page.component.html',
  styleUrls: ['./student-classes-page.component.scss']
})

export class StudentClassesPageComponent implements OnInit {

  
  classes = [];


  constructor(
    private studentClassService: StudentClassService,
  ) { 
  }

  ngOnInit(): void {
    
    this.studentClassService.getClassByUser().subscribe(
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

