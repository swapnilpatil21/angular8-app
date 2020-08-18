import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductGetComponent } from './product-get/product-get.component';  
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  {  
    path: 'products',  
    component: ProductGetComponent  
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
