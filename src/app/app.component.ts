import { Component } from '@angular/core';
export type EditorType = 'add' | 'list' | 'edit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
    title = 'homeAssignment-3';

    editor: EditorType = 'list'

     get showListContact() {
      return this.editor === 'list';
    }
    
    
    get showAddContact() {
      return this.editor === 'add';
    }
    
    get showEditContact () {
      return this.editor === 'edit';
    }
    toggleEditor(type: EditorType){
      this.editor = type;
    }


      
}




