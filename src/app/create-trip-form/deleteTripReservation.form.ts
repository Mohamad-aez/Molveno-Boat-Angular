import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoatType } from '../shared/models/boatType.model';
import { Trip } from '../shared/models/trip.model';

export class DeleteTripReservationForm extends FormGroup {
  constructor() {
    super({
      id: new FormControl('', [Validators.required])
    });
  }

  /** Gets the model of this form */
  public getModel(): Trip {
    return {
      id: this.controls.id.value,
      startTime: '',
      endTime: '',
      numberOfPersons: 0,
      boatType: null,
      guest: null,
      status: '',
      reservationDuration: 0,
      boats: null,
      cost: 0
    };
  }
}
