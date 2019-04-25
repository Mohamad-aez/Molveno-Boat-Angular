import { Guest } from './guest.model';

export class CreateTrip {
  public startTime: string;
  public endTime: string;
  public numberOfPersons: number;
  public guest: Guest;
  public boatType: string;
}
