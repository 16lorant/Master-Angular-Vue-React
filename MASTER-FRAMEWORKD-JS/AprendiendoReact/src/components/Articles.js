import React,{Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from "../Global";
import ImageDefault from "../assets/images/default.png";


class Articles extends Component{
    
    url = Global.url;

    state = {
        articles:[],
        status: null
    };

    componentWillMount(){
        var home = this.props.home;
        var search = this.props.search;

        if (home === 'true') {
            this.getLastArticles();
        }else if (search && search !== null && search !== undefined) {
            this.getArticlesBySearch(search);
        }else{
            this.getArticles();
        }
    };

    getArticlesBySearch = (searched) => {
        axios.get(this.url+'search/'+searched)
        .then(res => {
            if (res.data.status==='success') {
                console.log(res.data);
                this.setState({
                    articles: res.data.article?res.data.article:res.data.articles,
                    status: 'success'
                });    
            } 
        })
        .catch(err => {
            this.setState({
                articles: [],
                status: 'success'
            });
        });
        
    };

    getLastArticles = () => {
        axios.get(this.url+'articles/last')
        .then(res => {
            if (res.data.status==='success') {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            }
            
            
        });
        
    };

    getArticles = () => {
        axios.get(this.url+'articles')
        .then(res => {
            if (res.data.status==='success') {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            }
            
            
        });
        
    };

    render(){
        if (this.state.articles.length>=1) {
            
            var listArticles = this.state.articles.map((article) => {

                return (
                    <article key={article._id} className="article-item" id="article-template">
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

                        <h2>{article.title}</h2>
                        <span className="date">
                            <Moment locale="es" fromNow>{article.date}</Moment>
                        </span>

                        <Link to={'/blog/articulo/'+article._id}>Leer mas</Link>

                        <div className="clearfix"></div>
                    </article>
                );

            })
            
            return (
                <div id="articles">
                    {listArticles}
                </div>
            );
            
        }else if (this.state.articles.length === 0 && this.state.status === 'success') {
            return (<div id="articles">
                <h2 className="subheader">No hay articulos para mostrar</h2>
                <p>Todavia no hay contenido en esta sección</p>
            </div>);
        }else{
            return (<div id="articles">
                <h2 className="subheader">Cargando.......</h2>
                <p>Espere mientras carga el contenido</p>
            </div>);
        }
    }
}

export default Articles;