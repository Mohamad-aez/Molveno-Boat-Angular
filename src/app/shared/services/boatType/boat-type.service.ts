import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoatType } from '../../models/boatType.model';
import { BoatTypeCreate } from '../../models/boatType-create';

@Injectable({
  providedIn: 'root'
})
export class BoatTypeService {
  private readonly endpiont = 'http://localhost:8080/get-all-boattypes';
  private readonly endpiont1 = 'http://localhost:8080/add-boattype';
  private readonly endpiont2 = 'http://localhost:8080/edit-boattype';
  private readonly endpiont3 = 'http://localhost:8080/delete-boattype';

  constructor(private readonly http: HttpClient) {}

  public getAllBoatTypes(): Observable<BoatType[]> {
    return this.http.get<BoatType[]>(this.endpiont);
  }
  public addBoatType(boatTypeCreate: BoatTypeCreate): Observable<void> {
    return this.http.post<void>(this.endpiont1, boatTypeCreate);
  }
  public deleteBoatType(deletedBoatType: BoatType): Observable<void> {
    return this.http.post<void>(this.endpiont3, deletedBoatType);
  }

  public editBoatType(editedBoatType: BoatType): Observable<void> {
    return this.http.post<void>(this.endpiont2, editedBoatType);
  }
}
