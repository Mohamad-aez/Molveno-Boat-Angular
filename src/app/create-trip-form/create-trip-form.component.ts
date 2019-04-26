import { Component, OnInit } from '@angular/core';
import { BoatType } from '../shared/models/boatType.model';
import { CreateTrip } from '../shared/models/createTrip.model';
import { CreateTripForm } from './crateTrip.form';
import { BoatTypeService } from '../shared/services/boatType/boat-type.service';
import { GuestService } from '../shared/services/guest/guest.service';
import { TripService } from '../shared/services/tripService/trip.service';
import { BoatDeatail } from '../shared/models/boatDetail.model';
import { Router } from '@angular/router';
import { Trip } from '../shared/models/trip.model';
import { DeleteTripReservationForm } from './deleteTripReservation.form';

@Component({
  selector: 'app-create-trip-form',
  templateUrl: './create-trip-form.component.html',
  styleUrls: ['./create-trip-form.component.css']
})
export class CreateTripFormComponent implements OnInit {
  public boatTypes: BoatType[] = [];
  public boatType: BoatType;
  public createTrip: CreateTrip;
  public trips: CreateTrip[] = [];
  public allTrips: Trip[] = [];
  public boatsForTrip: BoatDeatail[] = [];
  public isAvailable: boolean;
  // public displayDate = new Date().toISOString().slice(0, 16);

  public form: CreateTripForm = new CreateTripForm();
  public form2: DeleteTripReservationForm = new DeleteTripReservationForm();

  constructor(
    private boatTypeService: BoatTypeService,
    private tripService: TripService,
    public router: Router
  ) {}

  ngOnInit() {
    this.boatTypeService
      .getAllBoatTypes()
      .subscribe(boatTypes => (this.boatTypes = boatTypes));
    this.tripService
      .getAllTrips()
      .subscribe(alltrips => (this.allTrips = alltrips));
  }

  public checkAvailability() {
    const trip: CreateTrip = this.form.getModel();
    this.tripService.checkBoatsAvailabilityStartTrip2(trip).subscribe(x => {
      this.boatsForTrip = x;

      /////
      // time picker validation
      // console.log(this.displayDate);

      //   const endsent: string = this.form
      //     .getModel()
      //     .startTime.slice(11, 16)
      //     .replace(':', '');
      //   let endtimesent = Number(endsent);
      //   const timesent: string = this.form
      //     .getModel()
      //     .endTime.slice(11, 16)
      //     .replace(':', '');
      //   const dateSsent: string = this.form.getModel().startTime.slice(0, 10);
      //   const dateEsent: string = this.form.getModel().endTime.slice(0, 10);
      //   const nowDate = new Date().toISOString().slice(0, 10);
      //   const d1start = new Date(dateSsent).getDate();
      //   const d2End = new Date(dateEsent).getDate();
      //   const d3Now = new Date(nowDate).getDate();
      //   const numberofpersons1: number = this.form.getModel().numberOfPersons;

      //   let starttimesent = Number(timesent);
      //   let timeNow = new Date()
      //     .toLocaleTimeString()
      //     .slice(0, 5)
      //     .replace(':', '');
      //   let starttimenow: Number = Number(timeNow);

      //   if (d1start === d3Now && starttimesent < starttimenow) {
      //     alert(`plesae enter valid start time or end time'
      //     `);
      //   } else if (d1start === d2End && endtimesent < starttimesent) {
      //     alert(`
      // Hi ${'plesae enter valid start time or end time'}
      //     `);
      //   } else if (numberofpersons1 == 0 || dateSsent == '' || dateEsent == '') {
      //     alert(`plesae full in the fields correctly
      //     `);
      //   } else if (d2End < d1start) {
      //     alert(`plesae enter valid start time or end time`);
      //   }

      /////
    });
    console.log(this.isAvailable);
  }

  public onFormSubmit() {
    this.checkAvailability();
  }

  public supmitTrip() {
    const trip: CreateTrip = this.form.getModel();
    this.tripService.addTrip(trip).subscribe(() => {
      this.tripService.getAllTrips().subscribe(trips => (this.trips = trips));
      // console.log(this.isAvailable);
      this.router.navigate(['/', 'trips-overview']);
    });
  }

  public onFormSubmit2() {
    const deletedTripReservation: Trip = this.form2.getModel();
    this.tripService
      .deleteTripReservation(deletedTripReservation)
      .subscribe(() => {
        this.tripService
          .getAllTrips()
          .subscribe(alltrips => (this.allTrips = alltrips));
      });
  }
}
