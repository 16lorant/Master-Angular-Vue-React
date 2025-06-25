import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  
  public searchString: string;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.searchString='';
  }
  
  ngOnInit(): void {
    
  }

  goSearch(): void{
    this._router.navigate(['/buscar',this.searchString])
  }
}
