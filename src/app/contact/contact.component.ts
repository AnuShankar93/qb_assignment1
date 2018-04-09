import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './contact.component.html',
 
})
export class ContactComponent implements OnInit {
  field1: string = 'product';
  field2: string = 'price';
  data = [
    {product: "mobile", price: "10215"},
    {product: "camera", price: "10215"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
