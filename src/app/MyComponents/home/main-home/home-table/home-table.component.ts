import { Component } from '@angular/core';
import { Person } from 'src/app/table';
import { NzButtonSize } from 'ng-zorro-antd/button'


@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.css']
})
export class HomeTableComponent {
  listOfData: Person [] = [
    {
      name: 'Faisal Tarar',
    },
    {
      name: 'Faisal Tarar',
    },
    {
      name: 'Faisal Tarar',
    },
    {
      name: 'Faisal Tarar',
    },
    {
      name: 'Faisal Tarar',
    },
    {
      name: 'Faisal Tarar',
    },
    {
      name: 'Faisal Tarar',
    },
   
  ];

  size: NzButtonSize = 'large';
  size2: NzButtonSize = 'default'
}
