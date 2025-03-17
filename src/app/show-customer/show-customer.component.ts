import { Component } from '@angular/core';
import { BankService } from '../Services/bank.service';

@Component({
  selector: 'app-show-customer',
  imports: [],
  templateUrl: './show-customer.component.html',
  styleUrl: './show-customer.component.css'
})
export class ShowCustomerComponent {
  showCustomers:any;
  constructor(private bankservice:BankService){
    this.showCustomer();
  }

  showCustomer(){
    this.bankservice.showCustomer().subscribe((data:any)=>{
      console.log(data);
      this.showCustomers=data;
    })
  }
  deleteCustomer(id:string){
    this.bankservice.deleteCustomer(id).subscribe((result)=>{
      console.log(result);

    })
  }

}
