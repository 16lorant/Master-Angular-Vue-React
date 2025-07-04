import React, {Component as Compo}  from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from "./components/Error";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Siderbar from "./components/Siderbar";
import Footer from "./components/Footer";

class Router extends Compo{

    render(){
        var buttonString = "ir al blog";
        return(
            <BrowserRouter>

                <Header/>

                <Slider
                    title="Bienvenido al Curso de React"
                    btn={buttonString}
                />

                <div className="center">
                    {/* CONFIGURAR RUTAS Y PÁGINAS */}
                    <Switch>
                        <Route exact path="/" component={Peliculas} />
                        <Route exact path="/home" component={Peliculas} />
                        <Route exact path="/ruta-prueba" component={SeccionPruebas} />
                        <Route exact path="/segunda-ruta" component={MiComponente}/>
                        
                        <Route exact path="/pagina-1" render={()=>(
                            <React.Fragment>
                                
                                <h1>Hola mundo desde la ruta: PAGINA 1</h1>
                                <MiComponente saludo="Hola amigo"/>
                            
                            </React.Fragment>

                        )}/>

                        <Route exact path="/pruebas/:nombre/:apellidos?" render={ (props)=>{
                            var nombre = props.match.params.nombre;
                            var apellidos = props.match.params.apellidos;
                            return (
                                        <div id="content">
                                            <h1 className="subheader">Página de pruebas</h1>
                                            <h2>
                                            {nombre && !apellidos &&
                                                nombre
                                            }
                                            {nombre && apellidos &&
                                                nombre+' '+apellidos
                                            }
                                            </h2>
                                        </div>
                                    );
                            }
                        }/>



                        <Route component={Error} />
                    </Switch>
                </div>
                <Siderbar/>
                <div className="clearfix"></div>
                <Footer/>

            </BrowserRouter>
        );
    }
}

export default Router;