import React, {Component} from "react";
import Pelicula from "./Pelicula";
import Siderbar from "./Siderbar";
import Slider from "./Slider";

class Peliculas extends Component{
    state = {};

    cambiarTitulo = () => {
        var {peliculas} = this.state;
        peliculas[0].title = "Batman Begins";

        this.setState({
            peliculas
        })
    }

    favorita = (pelicula) => {
        console.log("Favorita Marcada");
        console.log(pelicula);
        this.setState({
            favorita:pelicula
        })
    
    }

    componentWillMount(){
        //alert('se va a montar el componente');
        this.setState({
            peliculas:[
                {
                    title:'Batman vs Superman', image:'https://th.bing.com/th/id/R.aa2e6c68c24b8a0e53222637e658081e?rik=0NfZEzXPBWex4w&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fsuperman-in-batman-vs-superman-movie.jpg&ehk=A88y6ZLWF8tvD%2fVUl5PW%2btDZU4YWhbMgZ8tYMbRatvA%3d&risl=&pid=ImgRaw&r=0'
                },
                {
                    title:'Entrenando a tu dragon', image:'https://2.bp.blogspot.com/-4EhPEVEZX90/XE_bBPw4zEI/AAAAAAAAAjA/ELXOmfqdh-U3FV0VHQBvEKfkqTwGjNyiwCLcBGAs/s1600/comoentrenaratudragon3_Top_06.jpg'
                },
                {
                    title:'Demon Slayer', image:'https://tse2.mm.bing.net/th/id/OIP.PL8R_iVt_vS14dgro8ZlMAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
                }
            ],
            nombre:"Ramon Oronel",
            favorita:''
        });
    }

    componentDidMount(){
        //alert('ya se monto el componente');
    }

    componentWillUnmount(){
        //alert("me voy a desmontar");
    }

    render(){
        var pStyle ={
            background : 'green',
            color: 'white',
            padding: '10px'
        }
        var favorita;
        if (this.state.favorita.title) {
            favorita = 
            (
                <p className="favorita" style={pStyle}>
                    <strong>La pelicula favorita es: </strong>
                    <span>{this.state.favorita.title}</span>
                </p>
            );
        }else{
            favorita = 
            (
                <p>NO HAY PELICULA FAVORITA</p>
            );
        }
        return(
            <div id="Peliculas">
                <Slider
                        title="Peliculas"
                        size="slider-small"
                />
                <div className="center">
                    <div id="content" className="pelicula">

                        <h2 className="subheader">Listado de peliculas</h2>
                        <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>

                        <p>
                            <button onClick={this.cambiarTitulo}>
                                Cambiar titulo de batman
                            </button>
                        </p>
                        {/*this.state.favorita.title ? (
                            <p className="favorita" style={pStyle}>
                                <strong>La pelicula favorita es: </strong>
                                <span>{this.state.favorita.title}</span>
                            </p>
                            ) : (
                                <p>NO HAY PELICULA FAVORITA</p>
                            )
                        */}
                        {favorita}
                        

                        {/** Crear componentes pelicula */}
                        <div id="articles">
                        {
                            this.state.peliculas.map((pelicula,i)=>{
                                return(
                                    <Pelicula 
                                        key = {i}
                                        pelicula = {pelicula}
                                        marcarFavorita = {this.favorita}
                                    />
                                )
                            })
                        }
                        </div>
                    </div>
                    <Siderbar
                         blog = "false"
                    />
                </div>
            </div>
        );
    }
}

export default Peliculas;