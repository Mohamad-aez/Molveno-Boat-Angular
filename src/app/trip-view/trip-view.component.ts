import { Component, OnInit } from '@angular/core';
import { Trip } from '../shared/models/trip.model';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { TripService } from '../shared/services/tripService/trip.service';
import { Boat } from '../shared/models/boat.model';
import { BoatDeatail } from '../shared/models/boatDetail.model';

@Component({
  selector: 'app-trip-view',
  templateUrl: './trip-view.component.html',
  styleUrls: ['./trip-view.component.css']
})
export class TripViewComponent implements OnInit {
  public trip: Trip;
  public boat: Boat;
  public boats: BoatDeatail[];
  public allTrips: Trip[];

  ngOnInit() {
    this.getOneTrip();
    this.getAllTrips();
  }
  public getOneTrip() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.tripService.getOneTrip(id).subscribe(trip => (this.trip = trip));
  }

  constructor(
    private route: ActivatedRoute,
    private readonly sanitizer: DomSanitizer,
    private readonly tripService: TripService
  ) {}

  public getAllTrips() {
    const trips$ = this.tripService.getAllTrips();
    trips$.subscribe(allTrips1 => {
      this.allTrips = allTrips1;
    });
  }
}
