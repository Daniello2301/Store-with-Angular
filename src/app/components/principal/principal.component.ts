import { Component, OnInit } from '@angular/core';

import productsData from './data/products.json';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  products: any = productsData;

  constructor() { }

  ngOnInit(): void {
  }

}
