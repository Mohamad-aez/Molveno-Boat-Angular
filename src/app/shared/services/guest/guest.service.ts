import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private readonly endpiont = 'http://localhost:8080/get-guest';
  private readonly endpiont1 = 'http://localhost:8080/add-guest';
  constructor(private readonly http: HttpClient) {}
}
