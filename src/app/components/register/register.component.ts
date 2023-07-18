import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Atributos
  registerForm: FormGroup = this.fb.group({
    nombre: [
      '',   // Valor por defecto del campo
      [     // Validaciones para campo
        Validators.required
      ]
    ],
    email: [
      '',   // Valor por defecto para el campo
      [     // Validaciones para el campo
        Validators.required,
        Validators.email
      ]
    ],
    password: [
      '',   // Valor por defecto para el campo
      [     // Validaciones para el campo 
        Validators.required,
        Validators.minLength( 8 ),
      ]
    ]
  });

  // Constructor: Inyeccion de dependencias
  constructor( private fb: FormBuilder ) {}

  // Metodo: Register
  register() {
    console.group( 'registerForm' );
    console.info( this.registerForm.value );
    console.info( this.registerForm.valid );
    console.groupEnd();
  }
}
