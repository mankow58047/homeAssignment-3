import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

//addForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  addForm = this.fb.group({
    fname: [''],
    lName: [''],
    pNumber: [''],
    email: [''],
  });

  onSubmit(){
    
  }

  add(){
    
  }
 

  ngOnInit(): void {
  

  }

}
