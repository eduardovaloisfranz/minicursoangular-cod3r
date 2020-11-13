import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"
  constructor(private matSnackBar : MatSnackBar, private httpClient : HttpClient) { }
  

  showOnConsole(msg: string) : void {
    console.log(msg)
  }
  showMessage(msg: string) : void {
    this.matSnackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',      
    })
  }
  create(product: Product) : Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product)
  }
}
