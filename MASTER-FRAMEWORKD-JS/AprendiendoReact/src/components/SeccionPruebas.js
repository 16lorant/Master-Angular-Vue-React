import React, {Component} from "react";
import MiComponente from "./MiComponente";


class SeccionPruebas extends Component{

    contador = 0;

    constructor(props){
        super(props);
        this.state = {
            contador : 0,
        }
    }

    HolaMundo(nombre) {
        let presentacion = <h2>Hola soy {nombre}</h2>
        return presentacion;
    };

    sumar = (e) =>{
        //this.state.contador=this.state.contador+1;
        this.setState({
            contador: (this.state.contador+1),
        })
    };

    restar = (e) => {
        //this.state.contador=this.state.contador-1;
        this.setState({
            contador: (this.state.contador-1),
        })
    };

    render(){
        let nombre = "Ramón Oronel";
        return(
            <section id="content">
    
                <h2 className="subheader">Ultimos articulos</h2>
                <p>
                    Curso aprediendo React
                </p>

                <h2 className="subheader">Funciones y JSX basico</h2>
                {this.HolaMundo(nombre)}

                <h2 className="subheader">Componentes</h2>
                <section className='componentes'>
                    <MiComponente/>
                </section>

                <h2 className="subheader">Estados</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar} />
                    <input type="button" value="Restar" onClick={this.restar} />
                </p>

            </section>
        );
    }
}

export default SeccionPruebas;