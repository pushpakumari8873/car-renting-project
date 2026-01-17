import { Component, inject, OnInit } from '@angular/core';
import { Booking } from '../../services/booking';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { carModel } from '../../model/model';


@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
})
export class BookingsComponent implements OnInit {

  carList: carModel[] = [];
  bookingList: any[] = [];

  constructor(private bookingSrv: Booking) { }

  bookingForm: FormGroup = new FormGroup({
    customerName: new FormControl(""),
    customerCity: new FormControl(""),
    mobileNo: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl(""),
    bookingId: new FormControl(0),
    carId: new FormControl(0),
    bookingDate: new FormControl(""),
    discount: new FormControl(0),
    totalBillAmount: new FormControl(0)
  })

  ngOnInit(): void {
    this.getCarList();
    this.getBookings();
  }

  getBookings() {
    this.bookingSrv.getAllBooking().subscribe((res: any) => {
      this.bookingList = res.data;
    })
  }

  getCarList() {
    this.bookingSrv.getAllCars().subscribe((res: any) => {
      this.carList = res.data;
    })
  }

  onSubmit() {
    this.bookingSrv.addBooking(this.bookingForm.value).subscribe({
      next: (res: any) => {
        if (res.result) {
          alert("Booking Added Successfully");
          this.getBookings();
        } else {
          alert(res.message);
        }
      },

    });
  }

  deleteBooking(id: number) {
    this.bookingSrv.deleteBooking(id).subscribe((res: any) => {
      if (res.result) {
        alert("Booking Deleted Successfully");
        this.getBookings();
      } else {
        alert(res.message);
      }
    })

  }

}


