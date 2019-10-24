import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    constructor(private fb: FormBuilder){}

  /** create a form (contactForm) with following controls/groups and  validations
   *    - name: control,    valiations: required
   *    - phone: control,   validations: required, number of 10 digits
   *    - address: group
   *      - street: control
   *      - city: control
   *      - zip: number of 6 digits
   */

  contactForm = this.fb.group({
      name:['', Validators.required],
      phone:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      address: this.fb.group({
          street: [''],
          city: [''],
          zip: ['',[Validators.minLength(6), Validators.maxLength(6), Validators.pattern("[0-9]{6}")]]
      })
  });

  onSubmit() {
    console.log('form value =>', this.contactForm.value);
  }

  get name() { return this.contactForm.get('name'); }
  get phone() { return this.contactForm.get('phone'); }
  get zip() { return this.contactForm.controls['address'].get('zip'); }
}
