export interface Person {
    name: string;
  }

export interface TreeNode {
  name: string;
  disabled?: boolean;
  children?: TreeNode[];
}

export interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  disabled: boolean;
}

export interface ChartData{
  Subject: string,
  RequsterName: string, 
  CreatedDate: string,
  Status: string,
  Priority: string,
  assignTo: string,
}