import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';


const routes: Routes = [
    {path: '', loadChildren: ()=>HomeModule},
    {path: 'home', loadChildren: ()=>HomeModule},
    {path: 'contact', loadChildren: ()=>ContactModule}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
