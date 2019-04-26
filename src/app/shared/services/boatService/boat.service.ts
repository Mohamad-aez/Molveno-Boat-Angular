import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boat } from '../../models/boat.model';
import { BoatDeatail } from '../../models/boatDetail.model';
import { EditedBoat } from '../../models/editedBoat.model';

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  private readonly endpiont = 'http://localhost:8080/get-all-boats';
  private readonly endpiont1 = 'http://localhost:8080/add-boat';
  private readonly endpiont2 = 'http://localhost:8080/edit-boat';
  private readonly endpiont3 = 'http://localhost:8080/delete-boat';
  private readonly endpiont4 = 'http://localhost:8080/get-one-boat';
  private readonly endpiont5 = 'http://localhost:8080/edit-boat';

  constructor(private readonly http: HttpClient) {}

  public getAllBoats(): Observable<BoatDeatail[]> {
    return this.http.get<BoatDeatail[]>(this.endpiont);
  }
  public addBoat(boat: Boat): Observable<void> {
    return this.http.post<void>(this.endpiont1, boat);
  }

  public getOneBoat(id: number): Observable<BoatDeatail> {
    return this.http.get<BoatDeatail>(this.endpiont4 + '/' + id);
  }

  public editBoat(id: number, boatAvailability: boolean): Observable<void> {
    return this.http.get<void>(
      this.endpiont5 + '/' + id + '/' + boatAvailability
    );
  }
  // public deleteCat(category: CategoryEdit): Observable<void> {
  //   return this.http.post<void>(this.endpiont3, category);
  // }

  // public editCategory(category: CategoryEdit): Observable<void> {
  //   return this.http.post<void>(this.endpiont2, category);
  // }
}
