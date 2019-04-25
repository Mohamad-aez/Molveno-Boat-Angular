import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoatType } from '../shared/models/boatType.model';

export class DeleteBoatTypeForm extends FormGroup {
  constructor() {
    super({
      id: new FormControl('', [Validators.required])
    });
  }

  /** Gets the model of this form */
  public getModel(): BoatType {
    return {
      id: this.controls.id.value,
      type: '',
      rentalPrice: 0
    };
  }
}
