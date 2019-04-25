import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditStartTrip } from '../shared/models/editStartTrip.model';

export class StartedTripForm extends FormGroup {
  constructor() {
    super({
      id: new FormControl('', [Validators.required])
    });
  }

  /** Gets the model of this form */
  public getModel(): EditStartTrip {
    return {
      id: this.controls.id.value
    };
  }
}
