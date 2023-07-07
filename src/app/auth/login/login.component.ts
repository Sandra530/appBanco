import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private clienteService: ClienteService, private router: Router) {

  }

  validarLogin() {
    console.log("Validando...", this.email, this.password);

    this.clienteService.login(this.email, this.password).subscribe(usuario => {
      if (usuario) {
        console.log(usuario);
        this.clienteService.crearSesion(usuario);
        this.router.navigateByUrl("/pages/dashboard");
      } else {
        console.error("Credenciales incorrectas");
      }
    })



  }

}
