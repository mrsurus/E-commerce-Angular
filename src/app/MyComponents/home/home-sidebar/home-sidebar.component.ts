import { Component, Input } from '@angular/core';
import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';
import { FlatTreeControl } from '@angular/cdk/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatNode, TreeNode } from 'src/app/table';
import { NzButtonSize } from 'ng-zorro-antd/button';


const TREE_DATA: TreeNode[] = [
  {
    name: 'Page',
    children: [
      {
        name: 'Page Header',
        children: [{ name: 'Header' }]
      },
      {
        name: 'Page Body',
        children: [
          {
            name: 'Sections',
            children: [
              {
                name: 'Header',
                children: [{ name: 'Sub-Header' }]
              },
              {
                name: 'Body',
                children: [{ name: 'First Name' }, { name: 'Last Name' }, { name: 'Email' }]
              }
            ]
          },
          {
            name: 'Sections',
            children: [{
              name: 'Header',
              children: [{ name: 'Sub-Header' }]
            },
            {
              name: 'Body',
              children: [{ name: 'Address' }, { name: 'Location' }, { name: 'Country' }]
            }]
          }
        ]
      },
      {
        name: 'Page Footer',
        children: [{ name: 'leaf' }]
      },

    ]
  }
];


@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.css']
})
export class HomeSidebarComponent {

  @Input() patalam! : boolean;

  
 

  private transformer = (node: TreeNode, level: number): FlatNode => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level,
    disabled: !!node.disabled
  });
  selectListSelection = new SelectionModel<FlatNode>(true);

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new NzTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.setData(TREE_DATA);
    this.treeControl.expandAll();
  }

  hasChild = (_: number, node: FlatNode): boolean => node.expandable;
  size: NzButtonSize = 'small';

}
