import { Component, Input } from '@angular/core';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
import { NzButtonSize } from 'ng-zorro-antd/button';


const options = [
  {
    value: 'Finance',
    label: 'Finance',
    children: [
      {
        value: 'Accounts',
        label: 'Accounts',
        children: [
          {
            value: 'Add Invoice',
            label: 'Add Invoice',
            isLeaf: true
          }
        ]
      },
    ]
  },
  {
    value: 'Human Resources',
    label: 'Human Resources',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
      }
    ]
  },
  {
    value: 'Governance',
    label: 'Governance'
  }
];

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {

  nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }

  size: NzButtonSize = 'large';
  sized: NzButtonSize = 'default'

  
}
