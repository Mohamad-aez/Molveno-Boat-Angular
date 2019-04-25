import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoatType } from 'src/app/shared/models/boatType.model';
import { Boat } from 'src/app/shared/models/boat.model';

export class BoatForm extends FormGroup {
  constructor() {
    super({
      boatNumber: new FormControl('', [Validators.required]),
      boatType: new FormControl('', [Validators.required]),
      numberOfSeats: new FormControl('', [Validators.required]),
      boatAvailability: new FormControl('', [Validators.required])
    });
  }

  /** Gets the model of this form */
  public getModel(): Boat {
    console.log(this.controls.boatType.value);
    return {
      boatNumber: this.controls.boatNumber.value,
      boatType: {
        id: this.controls.boatType.value,
        rentalPrice: 2,
        type: ''
      },

      numberOfSeats: this.controls.numberOfSeats.value,
      boatAvailability: this.controls.boatAvailability.value
    };
  }
}
