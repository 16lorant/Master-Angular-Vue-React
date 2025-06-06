import { Component, OnInit, DoCheck,OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  standalone: false,
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit,DoCheck,OnDestroy {
  
  public titulo : string;
  public peliculas : Pelicula[];
  public favorita : Pelicula;
  public fecha: any;

  //no meter logica en el constructor, solo seleccionar valor 
  constructor(){
    this.titulo = "Componente peliculas";
    this.peliculas = [
      new Pelicula("Spiderman Homecoming",2020,'https://images.hdqwalls.com/download/spiderman-homecoming-2017-movie-qj-3840x2400.jpg'),
      new Pelicula("Los thuderbots",2025,'https://th.bing.com/th/id/OIP.5Jp1gM1m75vO-QVBH4R_cwHaEK?rs=1&pid=ImgDetMain'),
      new Pelicula("Batman vs Superman",2018,'https://images.hdqwalls.com/download/batman-vs-superman-10k-ej-1920x1080.jpg')
    ];
    this.favorita={'image':'','year':0,'title':''};
    this.fecha= new Date();
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

  mostrarFavorita(event: any): void {
    console.log('event',event);
    this.favorita=event.pelicula;
  }

}
