import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})

export class CoursesPageComponent implements OnInit {

  courses = [
    {
      title: 'Treinamento de corte',
      value: 'R$ 350',
      duration: 6,
    },
    {
      title: 'Hidratação e Cauterização',
      value: 'R$ 450',
      duration: 12,
    },
    {
      title: 'Reconstrução e Nutrição',
      value: 'R$ 320',
      duration: 6,
    },
    {
      title: 'Como fazer escova',
      value: 'Gratuíto',
      duration: 6,
    },
    {
      title: 'Mechas',
      value: 'Gratuíto',
      duration: 6,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
