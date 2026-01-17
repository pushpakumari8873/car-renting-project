import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class CustomerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  customerList: any[] = [];

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers").subscribe((res: any) => {
      this.customerList = res.data;
    })
  }

}
