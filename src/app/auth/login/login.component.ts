import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private clienteService:ClienteService){

  }

validarLogin(){
  console.log("Validando...", this.email, this.password);

  const usuario = this.clienteService.hacerLogin(this.email, this.password);
  if(usuario){
    console.log(usuario);
  } else {
    console.error("Credenciales incorrectas");
  }
  

  }

}
