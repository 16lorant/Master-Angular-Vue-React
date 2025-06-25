import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { FileUploader } from 'ng2-file-upload';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-edit',
  standalone: false,
  templateUrl: '../article-new/article-new.component.html',
  styleUrl: './article-edit.component.css',
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article = {title:'','image':'','_id':'','content':'','date':''};
  public status?: string;
  public uploader:FileUploader = new FileUploader({
    url: `${Global.url}upload-image/`,
    disableMultipart: false, // Enable multipart form data
    autoUpload: false, // Set to true if you want files to upload automatically
    allowedFileType: ['image', 'pdf'],
  });
  public uploadResponse: any = '';
  public is_edit: boolean;
  public page_title: string;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
  ){
    this.is_edit=true;
    this.url = Global.url;
    this.page_title='Editar articulo';
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
      this.uploader.uploadAll();
    };
    this.uploader.onCompleteItem = (item, response, status, headers) => {
      this.uploadResponse =  JSON.parse(response).image;
      console.log('Respuesta del servidor:', response);
    };
  };

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit(): void {
    if (this.uploadResponse!='') {
      this.article.image=this.uploadResponse;
    }
    this._articleService.update(this.article._id,this.article).subscribe(
      response =>{
        console.log(response);
        if (response.status == 'success') {
          this.status='success';
          this.article=response.article;

          //Alerta
          swal(
            'Articulo editado!!',
            'El articulo se ha editado correctamente',
            'success'
          );

          this._router.navigate(['/blog/articulo',this.article._id]);
        } else {
          this.status='error';
        }

      },
      error =>{
        console.log(error);
        this.status = 'error';
        swal(
            'Edicion fallida!!',
            'El articulo no se ha editado correctamente',
            'error'
        );
      }
    );
  }

  getArticle():void{
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
