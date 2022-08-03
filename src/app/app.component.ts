import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroupDetails } from './form-group-details.model';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;

  disabledInputs: string[] = [];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name:        [
        'Hans-Günther',
        Validators.required
      ],
      lastname:    [
        '',
        Validators.required
      ],
      description: ''
    });
  }

  asDetails(formControlName: string): FormGroupDetails {
    const control = this.form.get(formControlName);
    return new FormGroupDetails(control);
  }

  toggleDisabledAttributeForName(name: string) {
    if (this.disabledInputs.includes(name)) {
      this.disabledInputs.splice(this.disabledInputs.indexOf(name), 1);
    } else {
      this.disabledInputs.push(name);
    }
  }

  toggleControlByName(name: string) {
    let control = this.form.get(name);
    if (control?.enabled) {
      control.disable();
    } else {
      control?.enable();
    }
  }
}
