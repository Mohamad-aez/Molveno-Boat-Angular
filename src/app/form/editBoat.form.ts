import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoatType } from 'src/app/shared/models/boatType.model';
import { Boat } from 'src/app/shared/models/boat.model';
import { BoatDeatail } from '../shared/models/boatDetail.model';

export class EditBoatForm extends FormGroup {
  constructor() {
    super({
      id: new FormControl('', [Validators.required]),
      boatAvailability: new FormControl('', [Validators.required])
    });
  }

  /** Gets the model of this form */
  public getModel2() {
    return {
      id: this.controls.id.value,
      boatAvailability: this.controls.boatAvailability.value
    };
  }
}
