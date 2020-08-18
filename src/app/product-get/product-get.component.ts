import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products: Product[];

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data: Product[]) => {
        // console.log("============>"+JSON.stringify(data));
        this.products = data;
      })
  }

  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      // console.log("deleted/.......");
      this.products.splice(id, 1);
    })
  }

}
