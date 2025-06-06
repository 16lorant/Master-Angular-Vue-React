import { Component,OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  standalone: false,
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula : Pelicula = {'image':'','year':0,'title':''};
  @Output() MarcarFavorita = new EventEmitter(); 

  constructor(){
  };

  ngOnInit(): void {
  };

  seleccionar(event: any,pelicula:any){
    console.log(pelicula);
    this.MarcarFavorita.emit({
      pelicula:pelicula
    })
  };

}
