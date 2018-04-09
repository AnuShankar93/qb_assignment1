import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent} from './map/map.component';
import { TableComponent } from './table/table.component'



@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [MapComponent,TableComponent],
  exports:[
    MapComponent,
    TableComponent
 ]
})
export class SharedModule { }
