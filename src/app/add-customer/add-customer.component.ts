import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BankService } from '../Services/bank.service';

@Component({
  selector: 'app-add-customer',
  imports: [FormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  showMessage:any;
  constructor(private customerservice:BankService){
  }
  addCustomer(data:any){
    console.log(data);
    this.customerservice.addCustomer(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.showMessage="customer added successfully";
      }
      
    })
  }
  // addCustomer(data: any) {
  //   console.log("Form Data Before Sending:", data); // Debugging
  
  //   this.customerservice.addCustomer(data).subscribe({
  //     next: (result) => console.log("Customer added successfully:", result),
  //     error: (error) => console.error("Error:", error)
  //   });
  // }
  
}
