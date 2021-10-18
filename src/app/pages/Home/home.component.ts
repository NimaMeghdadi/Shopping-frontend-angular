import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';
import { ApiRequest } from 'src/app/core/services/request.service';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products : Product[] = [];

  constructor(public router: Router , private gs : GlobalService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  onClickMoreProperties(){
  }

  onClickCard(home) {
    console.log(home);
    this.router.navigate(['main/home/detail/' + home.id]);
  }

  getProducts(){
    ApiRequest('GET').controller('product').call(this.gs).subscribe((resp) => {
      console.log(resp);
      this.products = resp
      
    })
  }
}