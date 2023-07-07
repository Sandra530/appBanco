import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {
  clienteLogeado: any = null;
  constructor (private clienteService: ClienteService, private router: Router){

  }
  ngOnInit(): void {
    this.clienteLogeado = this.clienteService.leerSesion();
  }
  cerrarSesion(){
    this.clienteService.cerrarSesion()
    this.router.navigateByUrl("/auth/login");

  }


}
