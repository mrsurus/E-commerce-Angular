import { Component } from '@angular/core';
import { ChartData } from 'src/app/table';

@Component({
  selector: 'app-homechart',
  templateUrl: './homechart.component.html',
  styleUrls: ['./homechart.component.css']
})
export class HomechartComponent {

  abcd: ChartData [] = [
    {
      Subject: 'Demo10-demo',
      RequsterName: 'Shawon Adams',
      CreatedDate: '01/07/19, 6.00 pm',
      Status: 'Closed',
      Priority: 'Low' ,
      assignTo: 'Gerald Battel' 
     },
    {
      Subject: 'Demo10-demo',
      RequsterName: 'Shawon Adams',
      CreatedDate: '01/07/19, 6.00 pm',
      Status: 'Closed',
      Priority: 'Low' ,
      assignTo: 'Gerald Battel' 
     },
    
   
  ];
  checked = true;


}
