import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts() {  
    return this 
           .http
           .get(`${this.uri}.json`);
  }  

  editProduct(id) {  
    return this
            .http
            .get(`${this.uri}/${id}.json`);  
  }

  updateProductService(name, description, price, id) {  
    const obj = {
        name,
        description,
        price
    };
    this  
      .http 
      .patch(`${this.uri}/${id}.json`, obj)
      .subscribe(res => console.log('Done................'));
  }

  deleteProduct(id) {  
    return this
            .http
            .delete(`${this.uri}/${id}.json`);  
  }

}
