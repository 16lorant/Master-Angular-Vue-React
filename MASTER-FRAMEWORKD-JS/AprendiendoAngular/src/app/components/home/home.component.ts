import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ArticleService]
})
export class HomeComponent implements OnInit{

  public title: string;
  public articles? : Article[];

  constructor(
    private _articleService: ArticleService
  ){
    this.title = 'Últimos artículos';
  }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
      response =>{
        if (response.articles) {
          this.articles=response.articles;
          console.log(this.articles);
        }else{

        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
