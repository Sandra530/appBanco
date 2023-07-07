import { Component, OnInit } from '@angular/core';
import { transferenciasRecibidas } from 'src/app/datos/transferencia-ejemplo';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';


@Component({
  selector: 'app-transferencias-recibidas',
  templateUrl: './transferencias-recibidas.component.html',
  styleUrls: ['./transferencias-recibidas.component.css']
})
export class TransferenciasRecibidasComponent implements OnInit {

  transferencias: any[] = []; //
  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService) {

  }

  ngOnInit(): void {
    const cliente = this.clienteService.leerSesion();
    this.transferenciaService.obtenerTransferenciasPorBeneficiarioId(cliente.id).subscribe(
      (transferenciasBeneficiario: any) => {
        this.transferencias = transferenciasBeneficiario
      })

  }

}
