import React,{Component} from "react";

class Pelicula extends Component{
    
    marcar = () =>{
        this.props.marcarFavorita(this.props.pelicula);
    }
    
    render(){
        const pelicula = this.props.pelicula;
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
                <a>Leer mas</a>
                <button onClick={this.marcar}>
                    Marcar como favorita
                </button>

                <div className="clearfix"></div>
            </article> 
        );
    }
}

export default Pelicula;