import { Component, OnInit } from '@angular/core';
import { Boat } from '../shared/models/boat.model';
import { BoatType } from '../shared/models/boatType.model';
import { BoatForm } from './boat.form';
import { BoatService } from '../shared/services/boatService/boat.service';
import { BoatTypeService } from '../shared/services/boatType/boat-type.service';
import { Router } from '@angular/router';
import { EditBoatForm } from './editBoat.form';
import { BoatDeatail } from '../shared/models/boatDetail.model';
import { TripService } from '../shared/services/tripService/trip.service';
import { Trip } from '../shared/models/trip.model';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public boats: Boat[] = [];
  public allBoats: BoatDeatail[] = [];
  public allTripsContainUnuseableBoat: Trip[] = [];
  public boat: Boat;
  public boatTypes: BoatType[] = [];
  public boatType: BoatType;

  public form: BoatForm = new BoatForm();
  public form2: EditBoatForm = new EditBoatForm();
  public boatAvailability = false;
  constructor(
    private boatService: BoatService,
    private tripService: TripService,
    private boatTypeService: BoatTypeService,
    public router: Router
  ) {}

  ngOnInit() {
    this.boatService.getAllBoats().subscribe(boats => (this.boats = boats));
    this.boatService
      .getAllBoats()
      .subscribe(allBoats => (this.allBoats = allBoats));
    this.boatTypeService
      .getAllBoatTypes()
      .subscribe(boatTypes => (this.boatTypes = boatTypes));
  }

  public onFormSubmit() {
    const boat: Boat = this.form.getModel();

    this.boatService.addBoat(boat).subscribe(() => {
      this.boatService.getAllBoats().subscribe(boats => (this.boats = boats));
      this.router.navigate(['/', 'boats-overview']);
    });
  }

  public onFormSubmit2() {
    const id: number = this.form2.getModel2().id;
    console.log(id);
    let boatAbailability: boolean = this.form2.getModel2().boatAvailability;
    this.boatAvailability = boatAbailability;
    this.tripService.getAllTripsContainUnuseableBoat(id).subscribe(trips => {
      this.allTripsContainUnuseableBoat = trips;
      console.log(this.allTripsContainUnuseableBoat.length);
      console.log(this.allTripsContainUnuseableBoat);
      console.log(boatAbailability);
      var boatAva = String(boatAbailability);

      if (boatAva === 'false') {
        console.log(this.allTripsContainUnuseableBoat.length);
        if (this.allTripsContainUnuseableBoat.length === 0) {
          this.boatService.editBoat(id, boatAbailability).subscribe(() => {
            this.boatService
              .getAllBoats()
              .subscribe(boats => (this.boats = boats));
            this.router.navigate(['/', 'boats-overview']);
          });
        } else {
          var x = '';
          this.allTripsContainUnuseableBoat.forEach(trip => {
            x = trip.id + ', ' + x;
          });
          alert(
            'sorry , Please allocate new boats for those trips before change the status of this trip  ' +
              x
          );
        }
      } else {
        console.log(this.allTripsContainUnuseableBoat.length + 'last else');
        console.log(boatAbailability);

        this.boatService.editBoat(id, boatAbailability).subscribe(() => {
          this.boatService
            .getAllBoats()
            .subscribe(boats => (this.boats = boats));
          this.router.navigate(['/', 'boats-overview']);
        });
      }
    });
  }

  public checkBoatInuse() {}
}
