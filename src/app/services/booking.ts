import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarResponse } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class Booking {

  constructor(private http: HttpClient) { }

  getAllBooking() {
    return this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/geAllBookings");
  }

  getAllCars() {
    return this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars")
  }

  addBooking(obj: any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewBooking", obj);
  }

  deleteBooking(id: number) {
    return this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeletBookingById?id=" + id);
  }
} 
