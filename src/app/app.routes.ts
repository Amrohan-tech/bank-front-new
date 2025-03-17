import { Routes } from '@angular/router';
import { ShowCustomerComponent } from './show-customer/show-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

export const routes: Routes = [
    {path:'show_customer', component:ShowCustomerComponent},
    {path:'add_customer',component:AddCustomerComponent}
];
