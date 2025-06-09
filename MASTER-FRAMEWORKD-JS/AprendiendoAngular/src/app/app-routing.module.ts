import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar componentes a los cuales le quiero hacer pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/articulo/:id', component: ArticleComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'pagina-de-pruebas', component: PaginaComponent},
  {path: 'pagina-de-pruebas/:nombre/:apellidos', component: PaginaComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
