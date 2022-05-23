/*import { Component, OnInit } from '@angular/core';*/
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts', /*identify the product , selectors beging with app-*/
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!:Product;
  constructor() { }

  ngOnInit(): void {
  }

}
