import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { FileUploader } from 'ng2-file-upload';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-new',
  standalone: false,
  templateUrl: './article-new.component.html',
  styleUrl: './article-new.component.css',
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article = {title:'','image':'','_id':'','content':'','date':''};
  public status?: string;
  public uploader:FileUploader = new FileUploader({
    url: `${Global.url}upload-image/`,
    disableMultipart: false, // Enable multipart form data
    autoUpload: false, // Set to true if you want files to upload automatically
    allowedFileType: ['image', 'pdf'],
  });
  public uploadResponse: any = '';
  public page_title: string;
  public is_edit: boolean;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
  ){
    this.page_title='Crear articulo';
    this.is_edit=false;
    this.url = Global.url;
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
  }

  onSubmit(): void {
    this.article.image=this.uploadResponse;
    this._articleService.create(this.article).subscribe(
      response =>{
        if (response.status == 'success') {
          this.status='success';
          this.article=response.articleStored;

          //Alerta
          swal(
            'Articulo creado!!',
            'El articulo se ha creado correctamente!!!',
            'success'
          );

          this._router.navigate(['/blog']);
        } else {
          this.status='error';
        }

      },
      error =>{
        console.log(error);
        this.status = 'error';
      }
    );
  }
}
