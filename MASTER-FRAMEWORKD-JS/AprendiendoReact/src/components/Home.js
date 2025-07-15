import React,{Component} from "react";
import Slider from "./Slider";
import Siderbar from "./Siderbar";
import Articles from "./Articles";

class Home extends Component{
   
    render(){
        return (
            <React.Fragment id="home">
                <Slider
                        title="Bienvenido al Curso de React"
                        btn='Ir al blog'
                        size="slider-big"
                />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Ultimos articulos</h1>
                        <Articles
                            home="true"
                        />
                    </div>
                    <Siderbar/>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Home;