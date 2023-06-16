import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent

},
  
  { path: 'transferencias-recibidas', component: TransferenciasRecibidasComponent
  
},

{ path: 'transferencias-enviadas', component: TransferenciasEnviadasComponent
  
},

];

;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
