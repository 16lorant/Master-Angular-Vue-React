import { Component,OnInit,Input } from '@angular/core';
import { Article } from '../../models/article';
import { Global } from '../../services/global';


@Component({
  selector: 'app-articles',
  standalone: false,
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {

  @Input() articles?:Article[];
  public url: string;

  constructor(){
    this.url=Global.url;
  }

  ngOnInit(): void {
    
  }
  
}
