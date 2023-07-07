import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient) { }

  urlApi: string = "http://localhost:8080/transferencia";

  //obtener transferencias
  obtenerTransferencias(){
    return this.http.get(this.urlApi);
  }

  obtenerTransferenciasPorOrdenanteId(id: number) {
    return this.http.get(`${this.urlApi}/ordenante/${id}`)
  }

  obtenerTransferenciasPorBeneficiarioId(id: number) {
    return this.http.get(`${this.urlApi}/beneficiario/${id}`)
  }

  guardar(transferencia: any) {
    return this.http.post(this.urlApi, transferencia);

}
obtenerTransferenciaPorId(id: number) {
    const url = `${this.urlApi}/${id}`;
    return this.http.get(this.urlApi+"/"+id)


}


obtenerTransferencia() {
    return this.http.get(this.urlApi);
}
}















