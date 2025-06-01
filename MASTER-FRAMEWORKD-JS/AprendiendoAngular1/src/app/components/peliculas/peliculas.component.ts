import { Component, OnInit, DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  standalone: false,
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit,DoCheck,OnDestroy {
  public titulo : string;
  //no meter logica en el constructor, solo seleccionar valor 
  constructor(){
    this.titulo = "Componente peliculas";
    console.log('Constructor lanzado');
  }

  //este esta creado para colocar logica
  ngOnInit(): void {
      console.log('Componente iniciado!!');
  }

  ngDoCheck(): void {
      console.log("docheck lanzado!!");
  }

  ngOnDestroy(): void {
    console.log("El componente se va a eliminar!!");
  }

  cambiarTitulo(): void {
    this.titulo = "El titulo ha sido cambiado!!";
  }

}
