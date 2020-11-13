import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  propLegal = "qualquer";
  product : Product = {
      name: "",
      price: null

  }
  constructor(private productService: ProductService, private router : Router) {     
  }

  ngOnInit(): void {    
    this.productService.showOnConsole('Alo!!');    
  }

  fazerAlgo() : void {
      console.log("Fazendo algo!")
      this.productService.showMessage("Teste!")
  }
  
  createProduct() : void {

      this.productService.create(this.product).subscribe((el) => {
        console.log(el)
        this.productService.showMessage("Operação Executada com Sucesso")
        this.router.navigate(["/products"])
      })
      
  }
  cancel() : void {
    this.router.navigate(["/products"])
  }



}
