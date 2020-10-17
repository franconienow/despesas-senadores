import { Component, OnInit } from '@angular/core';
import { Despesa, SenadoresServiceService } from '../senadores-service.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {

  constructor(private senadorService: SenadoresServiceService, private route: ActivatedRoute) { }

  nome: string;
  id: number;
  gastosSenador = [];

  gastosTotais: {tipo: number, valor: number}[];

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get("id"));
    });
    
    this.senadorService.retriveSenador(this.id).subscribe(despesaSenador => {
      this.nome = despesaSenador.nomeSenador;
      this.gastosSenador = despesaSenador.despesas;


      this.gastosTotais = [
        { tipo: 1, valor: this.senadorService.somaDespesas(despesaSenador.despesas, 1) },
        { tipo: 2, valor: this.senadorService.somaDespesas(despesaSenador.despesas, 2) },
        { tipo: 3, valor: this.senadorService.somaDespesas(despesaSenador.despesas, 3) },
        { tipo: 4, valor: this.senadorService.somaDespesas(despesaSenador.despesas, 4) },
        { tipo: 5, valor: this.senadorService.somaDespesas(despesaSenador.despesas, 5) },
        { tipo: 6, valor: this.senadorService.somaDespesas(despesaSenador.despesas, 6) },
        { tipo: 7, valor: this.senadorService.somaDespesas(despesaSenador.despesas, 7) },
        { tipo: 8, valor: this.senadorService.somaTotalDespesas(despesaSenador.despesas) },
      ]
      
    })

  }

}
