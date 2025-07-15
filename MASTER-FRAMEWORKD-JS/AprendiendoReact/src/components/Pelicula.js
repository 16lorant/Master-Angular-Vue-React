import React,{Component} from "react";
import { Link } from "react-router-dom";

class Pelicula extends Component{
    
    marcar = () =>{
        this.props.marcarFavorita(this.props.pelicula);
    }
    
    render(){
        const {title,image} = this.props.pelicula;
        return(
            <article className="article-item" id="article-template">
                <div className="images-wrap">
                    <img src={image} alt={title} />
                </div>

                <h2>{title}</h2>
                <span className="date">
                    Hace 5 minutos
                </span>
                <Link to='/blog'>Leer mas</Link>
                <button onClick={this.marcar}>
                    Marcar como favorita
                </button>

                <div className="clearfix"></div>
            </article> 
        );
    }
}

export default Pelicula;