import { Component, OnInit } from '@angular/core';
import { transferenciasEnviadas } from 'src/app/datos/envios-ejemplos';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';


@Component({
  selector: 'app-transferencias-enviadas',
  templateUrl: './transferencias-enviadas.component.html',
  styleUrls: ['./transferencias-enviadas.component.css']
})
export class TransferenciasEnviadasComponent implements OnInit {
  
  transferencias: any [] = []; //
  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService){

  }

  ngOnInit(): void {
    const cliente = this.clienteService.leerSesion();
    this.transferenciaService.obtenerTransferenciasPorOrdenanteId(cliente.id).subscribe((transferenciasEnviadas: any) => {this.transferencias = transferenciasEnviadas}) 
    
  }

}
