import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import { ReactiveFormsModule } from '@angular/forms';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductsService } from './products.service';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductGetComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
