import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './form-register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormRegisterComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormRegisterComponent],
})
export class FormRegisterModule {}
