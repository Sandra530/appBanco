import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-transferencia',
  templateUrl: './detalle-transferencia.component.html',
  styleUrls: ['./detalle-transferencia.component.css']
})
export class DetalleTransferenciaComponent: implements OnInit {

  transferencia: any = null;

  constructor(
    private route: ActivatedRoute
    private transferenciaService: TransferenciaService
    ){}

    ngOnInit(): void{
      let transferenciaIdString = this.route.snapshot.paramMap.get('id');
      let transferenciaId;
      if (transferenciaIdString){
        transferenciaId = parseInt(transferenciaIdString);
        console.log({transferenciaId});
        this.transferenciaService
          .obtenerTransferenciaPorId(transferenciaId)
          .subscribe((transferencia) =>{
            console.log({transferencia});
            this.transferencia = transferencia

          });
      }
      
    }

    
  }


