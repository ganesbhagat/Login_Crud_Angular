import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  clientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) {
    this.clientForm = this.fb.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: [''],
      addresses: this.fb.array([this.createAddress()])
    });
  }

  createAddress(): FormGroup {
    return this.fb.group({
      addressLine1: ['', Validators.required],
      town: [''],
      city: [''],
      pinCode: ['']
    });
  }

  get addresses(): FormArray {
    return this.clientForm.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(this.createAddress());
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  submit() {
    if (this.clientForm.invalid) return;

    const formValue = this.clientForm.value;

    // Convert dateOfBirth to ISO string if not null
    const payload = {
      title: formValue.title,
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      gender: formValue.gender,
      dateOfBirth: formValue.dateOfBirth ? new Date(formValue.dateOfBirth).toISOString().split('T')[0] : null,
      addresses: formValue.addresses.map((a: any) => ({
        addressLine1: a.addressLine1,
        town: a.town,
        city: a.city,
        pinCode: a.pinCode
      }))
    };

    this.clientService.addClient(payload).subscribe({
      next: () => {
        // alert('Client added successfully!');
        let isAddClient = confirm('Client added successfully!')
        if (isAddClient) {
          this.router.navigate(['/clients'])
        } else {
          this.clientForm.reset();
          this.addresses.clear();
          this.addAddress();
        }

      },
      error: (err) => {
        alert('Error adding client: ' + err.message);
      }
    });
  }
}
