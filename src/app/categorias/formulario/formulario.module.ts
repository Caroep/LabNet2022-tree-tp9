import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormularioComponent],
  imports: [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  ],
  
  exports: [
    FormularioComponent
  ],
   providers: [],
    bootstrap: []
})
export class FormularioModule { }
