import { BoatType } from './boatType.model';

export class BoatDeatail {
  public id: number;
  public boatNumber: string;
  public boatType: BoatType;
  public numberOfSeats: number;
  public boatAvailability: boolean;
  public countOfUsed: number;
}
