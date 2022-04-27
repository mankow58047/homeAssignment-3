import { NgIf } from '@angular/common';
import { Component, OnInit, Input} from '@angular/core';
import { Contact } from '../contacts';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
export type EditorType = 'edit';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

 @Input()
  contact!: { fName: string; lName: string; pNumber: string; email: string; };

  editor: EditorType = 'edit'

  // toggleEditor(type: EditorType){
  //   this.editor = type;
  // }

  // get showEditContact() {
  //   return this.editor === 'edit';
  // }


  onEdit(){
      
  }

  onDelete(contact: Contact): void{
    
  }

    //constructor() { }

  // ngOnInit(): void {
  // }

}



