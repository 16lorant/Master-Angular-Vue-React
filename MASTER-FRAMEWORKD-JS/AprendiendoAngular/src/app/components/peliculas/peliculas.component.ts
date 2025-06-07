import { Component, OnInit, DoCheck,OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  standalone: false,
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit,DoCheck,OnDestroy {
  
  public titulo : string;
  public peliculas : Pelicula[];
  public favorita : Pelicula;
  public fecha: any;

  //no meter logica en el constructor, solo seleccionar valor 
  constructor(
    private _peliculaService: PeliculaService
  ){
    this.titulo = "Componente peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.favorita={'image':'','year':0,'title':''};
    this.fecha= new Date();
  }

  //este esta creado para colocar logica
  ngOnInit(): void {
      console.log('Componente iniciado!!');
      console.log(this._peliculaService.holaMundo())
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

  mostrarFavorita(event: any): void {
    console.log('event',event);
    this.favorita=event.pelicula;
  }

}
