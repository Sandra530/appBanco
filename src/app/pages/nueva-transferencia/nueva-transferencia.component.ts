import { Component, Input, OnInit } from "@angular/core";



@Component  ({
    selector: 'app-nueva-transferencia',
    templateUrl: './nueva-transferencia.component.html',
    styleUrls: ['.nueva-transferencia.component.css']
})

export class TablaTransferenciasComponent  {
    @Input() transferencias: any = [];
}





export class NuevaTransferenciaComponent implements OnInit{
     ngOnInit(): void {
         throw new Error("Method not implemented.");
     }
     nuevaTransferencia: any ={
        ordenante: {
            id:1,
        },
        beneficiario: {
            id:null,
        },
        concepto:'',
        importe:0,

    }

};
ordenante: any = null;

feedback: string = '';

constructor(
    private transferenciaService: TransferenciaService, 
    private clienteService: ClienteService
    ) {}

ngOnInit():void {
    this.ordenante = this.clienteService.leerSesion();
}

enviarTransferencia(){
    if(this.ordenante){
        this.nuevaTransferencia.ordenante.id = this.ordenante.id;
        this.transferenciaService
        .guardar(this.nuevaTransferencia)
        .subscribe((transferenciaGuardada) => {
        console.log({transferenciaGuardada});
        this.feedback = "Transferencia enviada";
    });
}
(error)=>{
    console.log(error);
    this.feedback = "Error al enviar transferencia";
    };

}
