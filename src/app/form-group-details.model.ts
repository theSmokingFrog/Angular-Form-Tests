import { AbstractControl, ValidationErrors } from '@angular/forms';

export class FormGroupDetails {
  value: string;

  disabled: boolean;

  dirty: boolean;
  touched: boolean;
  pristine: boolean;
  errors: ValidationErrors | null;


  constructor(control: AbstractControl | null) {
    if (control != null) {
      this.value = control.value;
      this.disabled = control.disabled;
      this.dirty = control.dirty;
      this.touched = control.touched;
      this.pristine = control.pristine;
      this.errors = control.errors;
    } else {
      throw new Error('Details cannot be build');
    }
  }

}
