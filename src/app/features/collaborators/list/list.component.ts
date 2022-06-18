import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  infoColab = [
    {
      id: 7, 
      nome: 'Nathan Carlos Exercicio', 
      salario: 4500, 
      cargo: 'Dev Pl'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
