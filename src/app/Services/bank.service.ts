import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { }

  showCustomer(){
    return this.http.get("http://127.0.0.1:8000/api/customers")
  }
  addCustomer(data:any){
    return this.http.post("http://127.0.0.1:8000/api/customers",data);
  }
  deleteCustomer(id:any){
    return this.http.delete(`http://127.0.0.1:8000/api/customers/${id}`);
  }
}
