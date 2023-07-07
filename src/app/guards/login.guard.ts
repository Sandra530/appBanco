import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ClienteService } from '../services/cliente/cliente.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const clienteService = inject(ClienteService);
  const sesion = clienteService.leerSesion();
  if(sesion){
    return true
  }else{
  return false;
  }
};
