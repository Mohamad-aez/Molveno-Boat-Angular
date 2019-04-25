import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditedTripCost } from '../shared/models/editedTripCost.model';

export class EditedTripCostForm extends FormGroup {
  constructor() {
    super({
      id: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required])
    });
  }

  /** Gets the model of this form */
  public getModel(): EditedTripCost {
    return {
      id: this.controls.id.value,
      cost: this.controls.cost.value
    };
  }
}
