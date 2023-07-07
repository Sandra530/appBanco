import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { DetalleTransferenciaComponent } from './detalle-transferencia/detalle-transferencia.component';
import { loginGuard } from '../guards/login.guard';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [loginGuard] },



  {
    path: 'transferencias-recibidas', component: TransferenciasRecibidasComponent,
    canActivate: [loginGuard]

  },

  {
    path: 'transferencias-enviadas', component: TransferenciasEnviadasComponent,
    canActivate: [loginGuard]

  },

  {
    path: 'transferencias/:id', component: DetalleTransferenciaComponent,
    canActivate: [loginGuard]

  },
  {
    path: 'mi-cuenta', component: MiCuentaComponent,
    canActivate: [loginGuard]

  },
  {
    path: 'nueva-transferencia', component: NuevaTransferenciaComponent,
    canActivate: [loginGuard]

  },
];

;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
