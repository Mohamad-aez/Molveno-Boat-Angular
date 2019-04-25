import { Component, OnInit } from '@angular/core';
import { BoatType } from '../shared/models/boatType.model';
import { CreateTrip } from '../shared/models/createTrip.model';
import { StartTripForm } from './start-trip-form';
import { BoatTypeService } from '../shared/services/boatType/boat-type.service';
import { GuestService } from '../shared/services/guest/guest.service';
import { TripService } from '../shared/services/tripService/trip.service';
import { StartTrip } from '../shared/models/startTrip.model';
import { Boat } from '../shared/models/boat.model';
import { BoatDeatail } from '../shared/models/boatDetail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-trip-form',
  templateUrl: './start-trip-form.component.html',
  styleUrls: ['./start-trip-form.component.css']
})
export class StartTripFormComponent implements OnInit {
  public boatTypes: BoatType[] = [];
  public boatType: BoatType;
  public startTrip: StartTrip;
  public trips: StartTrip[] = [];
  public isAvailable: boolean;
  public boatsForTrip: BoatDeatail[] = [];

  public form: StartTripForm = new StartTripForm();

  constructor(
    private boatTypeService: BoatTypeService,
    private tripService: TripService,
    public router: Router
  ) {}

  ngOnInit() {
    this.boatTypeService
      .getAllBoatTypes()
      .subscribe(boatTypes => (this.boatTypes = boatTypes));
  }

  public checkAvailability() {
    const trip: StartTrip = this.form.getModel();

    this.tripService.checkBoatsAvailabilityStartTrip2(trip).subscribe(x => {
      this.boatsForTrip = x;
      // alert(trip);
    });

    console.log(this.isAvailable);
  }

  public onFormSubmit() {
    this.checkAvailability();
  }

  public supmitTrip() {
    const trip: StartTrip = this.form.getModel();
    this.tripService.addStartTrip(trip).subscribe(() => {
      this.tripService.getAllTrips().subscribe(trips => (this.trips = trips));
      // console.log(this.isAvailable);
      // window.location.reload();
      this.router.navigate(['/', 'trips-overview']);
    });
  }
}
