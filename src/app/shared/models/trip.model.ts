import { Guest } from './guest.model';
import { Boat } from './boat.model';
import { BoatDeatail } from './boatDetail.model';

export class Trip {
  public id: number;
  public status: string;
  public startTime: string;
  public endTime: string;
  public numberOfPersons: number;
  public guest: Guest;
  public boatType: string;
  public reservationDuration: number;
  public cost: number;
  public boats: BoatDeatail[];
}
