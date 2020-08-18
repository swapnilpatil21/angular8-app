import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';  
import { ProductsService } from '../products.service';  

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  angForm: FormGroup;  
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductsService, private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ],
      price: ['', Validators.required ]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {  
        this.ps.editProduct(params['id']).subscribe(res => {  
          this.product = res;  
      });  
    });
  }

  updateProduct(name, description, price, id) {  
    this.route.params.subscribe(params => { 
      this.ps.updateProductService(name, description, price, params.id);  
      this.router.navigate(['products']);  
    });
  }

}
