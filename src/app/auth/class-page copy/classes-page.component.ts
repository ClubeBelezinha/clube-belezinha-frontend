import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/service/class.service';
import LocalStorageUtil, { LocalStorageKeys } from 'src/util/localStorage.util';

@Component({
  selector: 'app-classes-page',
  templateUrl: './classes-page.component.html',
  styleUrls: ['./classes-page.component.scss']
})

export class ClassesPageComponent implements OnInit {

  
  classes = [];


  constructor(
    private classService: ClassService,
  ) { 
  }

  ngOnInit(): void {
    
    this.classService.getStudentClassList().subscribe(
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

