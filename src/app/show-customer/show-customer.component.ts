import { Component } from '@angular/core';
import { BankService } from '../Services/bank.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-customer',
  imports: [FormsModule],
  templateUrl: './show-customer.component.html',
  styleUrl: './show-customer.component.css'
})
export class ShowCustomerComponent {
  showCustomers:any;
  showMessage:any;
  getSelectedData:any;
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
      this.showCustomer();
      this.showMessage="Customer deleted successfully";
    })
  }
  selectCustomer(id:any){
    this.bankservice.selectCustomer(id).subscribe((result:any)=>{
      console.log(result);
      this.getSelectedData = result;
    })
  }
  updateCustomer(id:any,data:any){
    this.bankservice.updateCustomer(id,data).subscribe((result:any)=>{
      console.log(result);
      this.showCustomer();
      this.showMessage="Customer Data updated successfully";
    })
  }

}
