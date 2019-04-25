import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../shared/models/trip.model';
import { Router } from '@angular/router';
import { TripService } from '../shared/services/tripService/trip.service';
import { Boat } from '../shared/models/boat.model';
import { BoatDeatail } from '../shared/models/boatDetail.model';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  @Input()
  public trip: Trip;
  public boat: BoatDeatail;
  public allTrips: Trip[];
  public boatsOfTrip: BoatDeatail[];

  constructor(
    public router: Router,
    private readonly tripService: TripService
  ) {}

  ngOnInit() {
    this.getAllTrips();
  }

  public getAllTrips() {
    const trips$ = this.tripService.getAllTrips();
    trips$.subscribe(allTrips1 => {
      this.allTrips = allTrips1;
    });
  }
  onSlect(trip) {
    this.router.navigate(['/', trip.id]);
  }
}
