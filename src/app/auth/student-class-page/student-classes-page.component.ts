import { Component, OnInit } from '@angular/core';
import { StudentClassService } from 'src/service/studentClass.service';
import LocalStorageUtil, { LocalStorageKeys } from 'src/util/localStorage.util';

@Component({
  selector: 'app-classes-page',
  templateUrl: './classes-page.component.html',
  styleUrls: ['./classes-page.component.scss']
})

export class StudentClassesPageComponent implements OnInit {

  
  classes = [];


  constructor(
    private studentClassService: StudentClassService,
  ) { 
  }

  ngOnInit(): void {
    
    this.studentClassService.getStudentClassList().subscribe(
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

