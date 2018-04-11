import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent} from './map/map.component';
import { TableComponent } from './table/table.component';
import { KeysPipe } from'./pipes/key.pipe'



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MapComponent,TableComponent, KeysPipe],
  exports:[
    MapComponent,
    TableComponent,
    KeysPipe
 ]
})
export class SharedModule { }
