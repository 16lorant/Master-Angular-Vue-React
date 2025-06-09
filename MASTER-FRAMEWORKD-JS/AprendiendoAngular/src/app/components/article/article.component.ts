import { Component,OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article:Article;
  public url:string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.article={title:0,'image':'','_id':'','content':'','date':''}
    this.url=Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response =>{
          if (response.article) {
              this.article = response.article;
          }else{
              this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    })
  }
}
