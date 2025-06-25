import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles?: Article[];
  public search?: string;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ){
    //this.articles=[{'title':0,'image':'','_id':'','content':'','date':''}]
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      var search = params['search'];
      this.search = search;
      
      this._articleService.search(search).subscribe(
        response => {
          if (response.article) {
            this.articles = response.article;
          }else{
            this.articles=[];
          }
          console.log(this.articles);
        },
        error => {
          console.log(error);
          this.articles = [];
          //this._router.navigate(['/home']);
        }
        
      )
      
    });
  }

}
