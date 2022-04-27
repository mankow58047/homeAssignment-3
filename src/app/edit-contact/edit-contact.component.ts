import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent  {

  eContact = new FormArray([]);

  editForm = this.fb.group({
    fname: [''],
    lName: [''],
    pNumber: [''],
    email: [''],
  });

  // editForm = new FormGroup({
  //   fName: new FormControl(''),
  //   lName: new FormControl(''),
  //   pNumber: new FormControl(''),
  //   email: new FormControl(''),
  // });

  onSubmit(){
    console.warn(this.editForm.value);
  }
 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
