import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = 'Hola Mundo';
  constructor() { }

  ngOnInit(): void {


  }

  buscar(){
    console.log(this.termino);
  }

}
