import React, {Component} from "react";
import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";


class SeccionPruebas extends Component{

    HolaMundo(nombre) {
        let presentacion = <h2>Hola soy {nombre}</h2>
        return presentacion;
    }

    render(){
        let nombre = "Ramón Oronel";
        return(
            <section id="content">
    
                <h2 class="subheader">Ultimos articulos</h2>
                <p>
                    Curso aprediendo React
                </p>
                {this.HolaMundo(nombre)}
                <section className='componentes'>
                    <MiComponente/>
                    <Peliculas/>
                </section>

            </section>
        );
    }
}

export default SeccionPruebas;