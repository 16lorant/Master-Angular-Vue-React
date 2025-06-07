import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo: string;

  constructor(){
    this.user={
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    };
    this.campo='';
  };

  ngOnInit(): void {
    
  }

  onSubmit(): void{
    alert('formulado enviado!!');
    console.log(this.user);
  }

  hasDadoClick(): void{
    alert('has dado click!!');
  }

  hasSalido(): void{
    alert('has salido!!');
  }
}
