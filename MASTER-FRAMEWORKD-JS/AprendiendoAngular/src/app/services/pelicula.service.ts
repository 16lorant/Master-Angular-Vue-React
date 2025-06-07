import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService {
    
    public peliculas: Pelicula[];

    constructor() {
        this.peliculas =  [
            new Pelicula("Spiderman Homecoming",2020,'https://images.hdqwalls.com/download/spiderman-homecoming-2017-movie-qj-3840x2400.jpg'),
            new Pelicula("Los thuderbots",2025,'https://th.bing.com/th/id/OIP.5Jp1gM1m75vO-QVBH4R_cwHaEK?rs=1&pid=ImgDetMain'),
            new Pelicula("Batman vs Superman",2018,'https://images.hdqwalls.com/download/batman-vs-superman-10k-ej-1920x1080.jpg')
        ];
    }

    holaMundo(){
        return 'Hola mundo desde un servicio de Angular!!!!';
    }
    
    getPeliculas(){
        return this.peliculas;
    }
}