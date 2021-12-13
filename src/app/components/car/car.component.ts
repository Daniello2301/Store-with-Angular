import { Component, OnInit } from '@angular/core';
import productsCarData from './products-car.json';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  productsCar : any = productsCarData;

  constructor() {
  }

  ngOnInit(): void {
  }
}
