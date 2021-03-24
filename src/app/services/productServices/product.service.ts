import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = 'https://localhost:44387/api/';

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient
      .get<ListResponseModel<Product>>(newPath)
      }
      getProductsByCategoryId(categoryId:number):Observable<ListResponseModel<Product>> {
        let newpath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId
        return this.httpClient
          .get<ListResponseModel<Product>>(newpath)
          };
  }

