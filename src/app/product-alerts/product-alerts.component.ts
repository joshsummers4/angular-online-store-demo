import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import the product data 
import { Product } from '../products';

@Component({
  // selector identifies the component
  selector: 'app-product-alerts',
  // the template is the html filname for the component
  templateUrl: './product-alerts.component.html',
  // style sheet for the component
  styleUrls: ['./product-alerts.component.css']
})
// the exported class holds the functionalty for the component
export class ProductAlertsComponent implements OnInit {

  //propery for product with input decorator which indicates that the property value passes in from the component's parent product list
  @Input() product!: Product;
  //property notify used to send an event response to a user clicking notify me 
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
