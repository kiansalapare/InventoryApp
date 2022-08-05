import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;
  constructor(public http: HttpClient) 
  { 
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*')
  }

  addProd(data){
    return this.http.post('http://localhost/InventoryApp/backend/create.php',data);
  }

  getInventory(){
    return this.http.get('http://localhost/InventoryApp/backend/getInventory.php');
  }

  deleteButton(id){
    return this.http.delete('http://localhost/InventoryApp/backend/delete.php?id='+id);
  }

  getProduct(id){
    return this.http.get('http://localhost/InventoryApp/backend/getProd.php?id='+id);
  }

  updateInventory(id,data){
    return this.http.put('http://localhost/InventoryApp/backend/updateInventory.php?id='+id, data);
  }
}
