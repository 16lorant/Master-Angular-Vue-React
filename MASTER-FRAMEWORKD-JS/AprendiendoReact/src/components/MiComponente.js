import React, {Component} from "react";

class MiComponente extends Component{
    
    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate','Queso','Jamon cocido'],
            calorias: 400
        }

        return (
            <React.Fragment>
                <h1>{'Receta:'+receta.nombre}</h1>
                <h2>{'Calorias: '+ receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingredientes,i)=>{
                            console.log(ingredientes);
                            return(
                                <li key={i}>
                                    {ingredientes}
                                </li>
                            )
                        })
                    }
                </ol>
                { this.props.saludo &&
                    <React.Fragment>
                        <h1>DESDE UNA PROP: </h1>
                        <h3>{this.props.saludo}</h3>    
                    </React.Fragment>
                }
                <hr/>
            </React.Fragment>
        );

    }

}

export default MiComponente;