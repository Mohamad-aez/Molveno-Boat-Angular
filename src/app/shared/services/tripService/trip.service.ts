import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boat } from '../../models/boat.model';
import { CreateTrip } from '../../models/createTrip.model';
import { Trip } from '../../models/trip.model';
import { StartTrip } from '../../models/startTrip.model';
import { EditStartTrip } from '../../models/editStartTrip.model';
import { EditedTripCost } from '../../models/editedTripCost.model';
import { BoatDeatail } from '../../models/boatDetail.model';
@Injectable({
  providedIn: 'root'
})
export class TripService {
  private readonly endpiont = 'http://localhost:8080/get-all-trips';
  private readonly endpiont1 = 'http://localhost:8080/addingtrip';
  private readonly endpiont2 =
    'http://localhost:8080/check-boats-availability-for-trip';
  private readonly endpiont3 = 'http://localhost:8080/edit-started-trip';
  private readonly endpiont4 = 'http://localhost:8080/get-all-startedTrips';
  private readonly endpiont5 = 'http://localhost:8080/get-one-trip';
  private readonly endpiont6 = 'http://localhost:8080/get-all-endedTrips';
  private readonly endpiont7 = 'http://localhost:8080/edit-cost-ended-trip';
  private readonly endpiont8 =
    'http://localhost:8080/check-boats-availability-for-trip2';
  private readonly endpiont9 =
    'http://localhost:8080/get-allTrips-contain-unuseableBoat';
  private readonly endpiont10 = 'http://localhost:8080/delete-trip';

  constructor(private readonly http: HttpClient) {}

  public getAllTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.endpiont);
  }
  public getAllStartedTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.endpiont4);
  }

  public getAllEndedTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.endpiont6);
  }

  public getAllTripsContainUnuseableBoat(boatId: number): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.endpiont9 + '/' + boatId);
  }

  public getOneTrip(id: number): Observable<Trip> {
    return this.http.get<Trip>(this.endpiont5 + '/' + id);
  }
  public addTrip(createTrip: CreateTrip): Observable<void> {
    return this.http.post<void>(this.endpiont1, createTrip);
  }
  public editStartedTrip(editedTrip: EditStartTrip): Observable<void> {
    return this.http.post<void>(this.endpiont3, editedTrip);
  }

  public editCostForEndedTrip(
    editCostForEndedTrip: EditedTripCost
  ): Observable<void> {
    return this.http.post<void>(this.endpiont7, editCostForEndedTrip);
  }
  public addStartTrip(startTrip: StartTrip): Observable<void> {
    return this.http.post<void>(this.endpiont1, startTrip);
  }

  public checkBoatsAvailability(createTrip: CreateTrip): Observable<boolean> {
    return this.http.post<boolean>(this.endpiont2, createTrip);
  }
  public checkBoatsAvailabilityStartTrip(
    startTrip: StartTrip
  ): Observable<boolean> {
    return this.http.post<boolean>(this.endpiont2, startTrip);
  }

  public checkBoatsAvailabilityStartTrip2(
    startTrip: StartTrip
  ): Observable<BoatDeatail[]> {
    return this.http.post<BoatDeatail[]>(this.endpiont8, startTrip);
  }

  public deleteTripReservation(deletedTripReservation: Trip): Observable<void> {
    return this.http.post<void>(this.endpiont10, deletedTripReservation);
  }
}
