
import { NgModule } from '@angular/core';

import {MdInputModule, MdButtonModule, MdCheckboxModule, MdCardModule, MdDatepickerModule, MdNativeDateModule, MdIconModule} from '@angular/material';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

  ],
  imports: [
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdDatepickerModule,
    MdNativeDateModule,
    FormsModule,
    MdIconModule 
  ],
  exports:[
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdDatepickerModule,
    MdNativeDateModule,
    FormsModule,
    MdIconModule 
  ],
  providers: [],
  bootstrap: []
})
export class DependencyModule {}