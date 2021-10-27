import { Component, OnInit } from '@angular/core';
import { ParamsHandler } from 'src/app/core/params-handler';
import { GlobalService } from 'src/app/core/services/global.service';
import { ApiRequest } from 'src/app/core/services/request.service';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  products: Product[] = [];

  constructor(private gs: GlobalService) {}

  ngOnInit(): void {
    this.getProducts(new ParamsHandler());
  }

  getProducts(params: ParamsHandler = null) {
    ApiRequest('GET')
      .controller('product')
      .action('')
      .setParam(params)
      .call(this.gs)
      .subscribe((resp) => {
        console.log(resp);
        this.products = resp;
      });
  }
}
