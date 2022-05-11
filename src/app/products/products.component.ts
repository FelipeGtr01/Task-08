import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../PRODUCT';
import { PROD } from '../mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product = PROD;
  selectedPRODUCTS?: PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(PRODUCTS: PRODUCTS): void {
    this.selectedPRODUCTS = PRODUCTS;
  }
}