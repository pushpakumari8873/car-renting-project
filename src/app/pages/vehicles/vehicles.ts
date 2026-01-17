import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { carModel, ICarResponse } from '../../model/model';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css',
})
export class VehiclesComponent implements OnInit {

  newCarObj: carModel;
  carList: carModel[] = [];
  http = inject(HttpClient);

  constructor() {
    this.newCarObj = new carModel();
  }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles() {
    this.http.get<ICarResponse>("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res: ICarResponse) => {
      this.carList = res.data;
    })
  }

  onSaveCar() {
    this.http.post<ICarResponse>("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.newCarObj).subscribe((res: ICarResponse) => {
      if (res.result) {
        this.getVehicles();
        alert("Car Created Successfully");
      }
      else {
        alert(res.message)
      }
    })
  }

  onEditCar(item: carModel) {
    this.newCarObj = item;
  }

  onUpdateCar() {
    this.http.put<ICarResponse>("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar", this.newCarObj).subscribe((res: ICarResponse) => {
      if (res.result) {
        this.getVehicles();
        alert("Car Updated Successfully");
      }
      else {
        alert(res.message)
      }
    })
  }

  onDeleteCar(id: number) {
    this.http.delete<ICarResponse>("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=" + id).subscribe((res: ICarResponse) => {
      if (res.result) {
        this.getVehicles();
        alert("Car Deleted Successfully");
      }
      else {
        alert(res.message)
      }
    })

  }

}
