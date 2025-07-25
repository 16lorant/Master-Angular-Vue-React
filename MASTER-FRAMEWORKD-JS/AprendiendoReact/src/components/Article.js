import React, {Component} from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Global from "../Global";
import Siderbar from "./Siderbar";
import Moment from 'react-moment';
import 'moment/locale/es';
import ImageDefault from "../assets/images/default.png";

class Article extends Component {

    url = Global.url;

    state = {
        article: {},
        status: null
    };

    componentWillMount(){
        this.getArticle();
    }

    getArticle = () =>{
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
        .then(res => {
            this.setState({
                article: res.data.article,
                status: 'success'
            })
        }).catch(error => {
            this.setState({
                article: false,
                status: 'success'
            })
        })
    }

    deleteArticle = (id) =>{

        swal({
            title: "Estas seguro?",
            text: "Borrarás permanentemente tu articulo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(this.url+'article/'+id)
                    .then(res => {
                        this.setState({
                            article: res.data.article,
                            status: 'deleted'
                        });

                        swal(
                            'Articulo borrado',
                            'El articulo ha sido borrado correctamente',
                            'success'
                        );      
                    });
                } else {
                    swal(
                        'Tranquilo',
                        'No se ha borrado nada',
                        'info'
                    );
                }
        });
    }

    render(){

        if (this.state.status === 'deleted') {
            return <Redirect to='/blog'/>
        }

        var article = this.state.article;
        return(
            <div className="center">
                <section id="content">

                    {article &&
                        (<div id="articles">
                            <article className="article-item article-details">
                                <div className="images-wrap">
                                    {article.image !== null ?
                                        (
                                            <img src={this.url+'get-image/'+article.image} alt={article.title} />
                                        )
                                        :
                                        (
                                            <img src={ImageDefault} alt={article.title} />
                                        )
                                    }
                                </div>

                                <h1 className="subheader">{article.title}</h1>
                                <span className="date">
                                    <Moment locale="es" fromNow>{article.date}</Moment>
                                </span>
                                <p>
                                    {article.content}
                                </p>

                                <button onClick={
                                    () =>{
                                        this.deleteArticle(article._id)
                                    }
                                } 
                                className="btn btn-danger">Eliminar</button>
                                <Link to={'/blog/editar/'+article._id} className="btn btn-warning">Editar</Link>

                                <div className="clearfix"></div>
                            </article>
                            
                        </div>)

                    }
                    {!this.state.article && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader"> 
                                El artículo no exíste
                            </h2>
                            <p>Intentalo de nuevo más tarde</p>
                        </div>
                    }
                    {!this.state.status === null &&
                        <div id="article">
                            <h2 className="subheader"> 
                                Cargando......
                            </h2>
                            <p>Espere unos segundos</p>
                        </div>
                    }

                    
                </section>
                <Siderbar />
            </div>

        );
    }
}

export default Article;