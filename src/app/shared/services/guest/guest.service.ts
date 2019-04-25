import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guest } from '../../models/guest.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private readonly endpiont = 'http://localhost:8080/get-all-guests';
  private readonly endpiont1 = 'http://localhost:8080/add-guest';
  constructor(private readonly http: HttpClient) {}

  public getAllGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.endpiont);
  }
  public addGuest(guest: Guest): Observable<void> {
    return this.http.post<void>(this.endpiont1, guest);
  }
}
