import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  standalone: false,
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css'
})
export class PaginaComponent implements OnInit{
  public nombre: string;
  public apellidos: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.nombre = "";
    this.apellidos = "";
  }
  
  ngOnInit(): void {
      this._route.params.subscribe((params:Params)=>{
        console.log(params);
        this.nombre = params['nombre'];
        this.apellidos = params['apellidos'];
      })
  }
  redireccion():void {
    this._router.navigate(['/pagina-de-pruebas','ramon','lorant']);
  }

}
