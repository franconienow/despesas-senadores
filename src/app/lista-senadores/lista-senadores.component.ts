import { Component, OnInit } from '@angular/core';
import { Senador, SenadoresServiceService } from '../senadores-service.service'

@Component({
  selector: 'app-lista-senadores',
  templateUrl: './lista-senadores.component.html',
  styleUrls: ['./lista-senadores.component.css']
})
export class ListaSenadoresComponent implements OnInit {

  listaSenadores: Senador[] = [];

  constructor(private senadoresService: SenadoresServiceService) { }

  ngOnInit(): void {
    this.senadoresService.listaSenadores().subscribe(list => {
      this.listaSenadores = list;
    })
  }

}
