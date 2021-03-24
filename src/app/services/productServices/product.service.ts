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
  apiUrl = 'https://localhost:44387/api/products/getall';

  getProducts():Observable<ListResponseModel<Product>> {
    return this.httpClient
      .get<ListResponseModel<Product>>(this.apiUrl)
      };
  }

