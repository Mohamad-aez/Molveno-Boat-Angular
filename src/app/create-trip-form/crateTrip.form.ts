import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoatType } from 'src/app/shared/models/boatType.model';
import { Boat } from 'src/app/shared/models/boat.model';
import { CreateTrip } from '../shared/models/createTrip.model';
import { Guest } from '../shared/models/guest.model';

export class CreateTripForm extends FormGroup {
  constructor() {
    super({
      boatType: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl(''),
      numberOfPersons: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      idType: new FormControl('', [Validators.required]),
      idNumber: new FormControl('', [Validators.required])
    });
  }

  /** Gets the model of this form */
  public getModelGuest(): Guest {
    console.log(this.controls.boatType.value);
    return {
      name: this.controls.name.value,
      phone: this.controls.phone.value,
      idType: this.controls.idType.value,
      idNumber: this.controls.idNumber.value
    };
  }

  public getModel(): CreateTrip {
    console.log(this.controls.boatType.value);
    return {
      startTime: this.controls.startTime.value,
      endTime: this.controls.endTime.value,
      numberOfPersons: this.controls.numberOfPersons.value,
      boatType: this.controls.boatType.value,
      guest: this.getModelGuest()
    };
  }
}
