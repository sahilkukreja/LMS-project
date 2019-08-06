import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent  {
  leaves = ['Casual', 'Earned' , 'Sick']
  
 

registerForm: FormGroup;
submitted = false;

constructor(private formBuilder: FormBuilder) { }

ngOnInit() {
    this.registerForm = this.formBuilder.group({
      leave: ['', [Validators.required]],
    });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('leave requested')
}
}