import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserResponse } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

declare let alertify: any;
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent {
  userForm!: FormGroup;

  constructor(private userService: UserService) {
    this.userForm = new FormGroup({
      tipoDocumentoResidente: new FormControl('', [Validators.required]),
      numeroDocumentoResidente: new FormControl('', [Validators.required]),
      nombreResidente: new FormControl('', [Validators.required]),
      torre: new FormControl('', [Validators.required]),
      apartamento: new FormControl('', [Validators.required]),
      propietario: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    try {
      this.userService
        .register(this.userForm.value)
        .subscribe((result: IUserResponse) => {
          if (result.resultado === 'Usuario registrado con exito') {
            alertify.success(result.resultado);
            this.userForm.reset();
          } else {
            this.errorAlert();
          }
        });
    } catch (error) {
      this.errorAlert();
    }
  }

  errorAlert() {
    alertify.error('Ha ocurrido un error. Intentelo de nuevo mas tarde.');
  }
}
