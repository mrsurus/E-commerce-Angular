import { Component, Input } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Person } from 'src/app/table';



@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent {

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
    }
   
  ];

  size2: NzButtonSize = 'default'
  size: NzButtonSize = 'default';


 @Input() greetFunction! : Function;

  
}
