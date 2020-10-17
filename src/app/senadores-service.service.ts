import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Senador {
  id: number,
  nomeSenador: string
}

export interface Despesa {
  id: number,
  nomeSenador: string,
  despesas: {
      tipo: number,
      fornec: string,
      ano: number,
      mes: number,
      dia: number,
      valor: number
    }[]
}

const urlBase = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})

export class SenadoresServiceService {

  constructor(private http: HttpClient) { }

  somaTotalDespesas(arrayDespesas){
    return arrayDespesas.reduce((acc, cur) => {return acc + cur.valor}, 0)
  }

  somaDespesas(arrayDespesas, tipo: number): number{
    return arrayDespesas.filter(despesa => despesa.tipo == tipo).reduce((acc, cur) => {return acc + cur.valor}, 0)
  }

  listaSenadores(){
    return this.http.get<Senador[]>(`${urlBase}/senadores`)
  }

  retriveSenador(id: number){
    return this.http.get<Despesa>(`${urlBase}/despesasSenadores/${id}`)
  }

}
