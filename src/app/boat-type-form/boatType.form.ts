import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoatTypeCreate } from '../shared/models/boatType-create';
import { BoatType } from '../shared/models/boatType.model';

export class BoatTypeForm extends FormGroup {
  constructor() {
    super({
      type: new FormControl('', [Validators.required, Validators.minLength(1)]),
      rentalPrice: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(1000)
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): BoatTypeCreate {
    return {
      type: this.controls.type.value,
      rentalPrice: this.controls.rentalPrice.value
    };
  }
}
