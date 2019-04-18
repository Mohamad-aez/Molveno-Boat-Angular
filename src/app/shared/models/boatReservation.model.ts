import { Boat } from './boat.model';
import { Guest } from './guest.model';
import { Time } from '@angular/common';

export class BoatResrvation {
  public id: number;
  public boat: [Boat];
  public guest: [Guest];
  public reservationDate: Date;
  public startTime: Time;
  public endTime: Time;
  public reservationDuration: number;
  public numberofpersons: string;
  public cost: number;
}
