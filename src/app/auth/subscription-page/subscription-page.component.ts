import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClassChangeRequestDto } from 'src/app/dtos/class/class-update-request.dto';
import { StudentClassRegisterRequestDto } from 'src/app/dtos/studentClass/student-class-register-request.dto';
import { ClassService } from 'src/service/class.service';
import { CourseService } from 'src/service/course.service';
import { StudentClassService } from 'src/service/studentClass.service';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss']
})
export class SubscriptionPageComponent implements OnInit {

  request: StudentClassRegisterRequestDto;
  paymentComponent = false;
  values;
  form: FormGroup;

  toggleShowComponent(): void {
    this.paymentComponent = !this.paymentComponent;
  }

  constructor(private route: ActivatedRoute,
    private toastrService: ToastrService, private classService: ClassService, private courseService: CourseService, private studentClass: StudentClassService, private formBuilder: FormBuilder,  private router: Router,) {
    this.form = this.formBuilder.group({
      grade: ['', [Validators.required]],
      class: ['', [Validators.required]],
      course: ['', [Validators.required]],
      user: ['', [Validators.required]],
    })
 }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.values = params;
    });
  }

  subscription(courseId:any, classesId:any){

    var classes;
    console.log(classesId.classesId);
    if(classesId){
      this.classService.getClassById(classesId.classesId).subscribe(
        success => {
          classes = success;
          classes.numberPlaces = classes.numberPlaces - 1;
          const student = {
            grade: "0",
            class: classes._id,
            course: classes.course._id
           }
           console.log(student);
          this.classService.updateClass(classes).subscribe(
            success => {
              this.request = Object.assign({}, student);
              this.studentClass.registerStudentClass(this.request).subscribe(
                success => {
                  this.router.navigate(['/studentsClass']);
                  this.toastrService.success('Inscrição efetuada com sucesso!', 'Sucesso', {
                    progressBar: true
                  })
                },
                error =>  this.toastrService.error('Você já esta inscrito na turma!', 'Erro', {
                  progressBar: true
                })
                
              );
              
            },
            error => console.log(error)
            
          );
        },
        error => console.log(error)
        
      );
  
      
    }
    //[routerLink]="['/my-courses']"
  }
}
