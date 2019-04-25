import { Component, OnInit } from '@angular/core';
import { Trip } from '../shared/models/trip.model';
import { TripService } from '../shared/services/tripService/trip.service';
import { StartedTripForm } from './startedTrip.form';
import { EditStartTrip } from '../shared/models/editStartTrip.model';
import { EditedTripCost } from '../shared/models/editedTripCost.model';
import { EditedTripCostForm } from './editedTripCost.form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips-management-form',
  templateUrl: './trips-management-form.component.html',
  styleUrls: ['./trips-management-form.component.css']
})
export class TripsManagementFormComponent implements OnInit {
  public startedTrip: boolean = false;
  public plannedTrip: boolean = false;
  public endedTrip: boolean = false;

  public trips: Trip[];
  public allEndedTrips: Trip[];

  public form: StartedTripForm = new StartedTripForm();
  public form2: EditedTripCostForm = new EditedTripCostForm();
  // public form3: EndedTrip = new EndedTrip();

  public showMs: boolean = false;
  public showMs1: boolean = false;
  // public showMs2: boolean = false;
  public id: number = 0;
  public oneTrip: Trip;

  constructor(public router: Router, private tripService: TripService) {}

  ngOnInit() {
    this.tripService
      .getAllStartedTrips()
      .subscribe(trips => (this.trips = trips));
    this.tripService
      .getAllEndedTrips()
      .subscribe(allEndedTrips => (this.allEndedTrips = allEndedTrips));
  }

  public onFormSubmit() {
    const editedTrip: EditStartTrip = this.form.getModel();
    this.tripService.editStartedTrip(editedTrip).subscribe(() => {
      this.tripService.getAllTrips().subscribe(trips => (this.trips = trips));
    });
    this.id = editedTrip.id;
    this.showMs = true;
    this.form.reset();
  }

  public onFormSubmit2() {
    const editedTripCost: EditedTripCost = this.form2.getModel();
    this.tripService.editCostForEndedTrip(editedTripCost).subscribe(() => {
      this.tripService
        .getAllTrips()
        .subscribe(trips => (this.allEndedTrips = trips));
    });
    this.id = editedTripCost.id;
    this.showMs1 = true;
    this.form2.reset();
  }

  onSlect(id: number) {
    this.router.navigate(['/', id]);
  }

  public startedTripMethod() {
    this.startedTrip = !this.startedTrip;
  }

  public plannedTripMethod() {
    this.plannedTrip = !this.plannedTrip;
  }

  public endedTripsMethod() {
    this.endedTrip = !this.endedTrip;
  }

  public showMessage() {
    this.showMs = !this.showMs;
  }
  public showMessage1() {
    this.showMs1 = !this.showMs1;
    window.location.reload();
  }
}
