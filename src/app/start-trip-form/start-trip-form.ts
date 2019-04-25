import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Guest } from '../shared/models/guest.model';
import { StartTrip } from '../shared/models/startTrip.model';

export class StartTripForm extends FormGroup {
  constructor() {
    super({
      boatType: new FormControl('', [Validators.required]),
      // startTime: new FormControl('', [Validators.required]),
      numberOfPersons: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      idType: new FormControl('', [Validators.required]),
      idNumber: new FormControl('', [Validators.required])
    });
  }

  /** Gets the model of this form */
  public getModelGuest(): Guest {
    return {
      name: this.controls.name.value,
      phone: this.controls.phone.value,
      idType: this.controls.idType.value,
      idNumber: this.controls.idNumber.value
    };
  }

  public getModel(): StartTrip {
    console.log(this.controls.boatType.value);
    return {
      // startTime: this.controls.startTime.value,
      numberOfPersons: this.controls.numberOfPersons.value,
      boatType: this.controls.boatType.value,
      guest: this.getModelGuest()
    };
  }
}
