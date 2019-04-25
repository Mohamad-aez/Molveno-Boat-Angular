import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoatType } from '../shared/models/boatType.model';

export class EditBoatTypeForm extends FormGroup {
  constructor() {
    super({
      id: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      rentalPrice: new FormControl('', [Validators.required])
    });
  }

  /** Gets the model of this form */
  public getModel(): BoatType {
    return {
      id: this.controls.id.value,
      type: this.controls.type.value,
      rentalPrice: this.controls.rentalPrice.value
    };
  }
}
