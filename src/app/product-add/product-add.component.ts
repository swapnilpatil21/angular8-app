import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  
import { ProductsService } from '../products.service';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm: FormGroup;  
  constructor(private fb: FormBuilder, private ps: ProductsService, private route: ActivatedRoute, private router: Router) {  
    this.createForm();  
  }  

  createForm() {
    this.angForm = this.fb.group({  
      name: ['', Validators.required ],  
      description: ['', Validators.required ],  
      price: ['', Validators.required ]  
    });
  }

  addProduct(name, description, price) {
    this.route.params.subscribe(params => {  
      this.ps.addProduct(name, description, price);
      this.router.navigate(['products']);
    });
  }

  ngOnInit(): void {
  }

}
