import { Component,Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls : ['./table.component.css']
 
})
export class TableComponent implements OnChanges {
  
  @Input() records:any[]; //for fetching all the records
  @Input() caption:string; // for table heading
  keys: string[]; 
  constructor() { }

  ngOnChanges() {
    this.keys = Object.keys(this.records[0]);
  }

}
