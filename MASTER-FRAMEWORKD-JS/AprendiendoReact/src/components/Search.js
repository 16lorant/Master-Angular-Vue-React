import React,{Component} from "react";
import Slider from "./Slider";
import Siderbar from "./Siderbar";
import Articles from "./Articles";

class Search extends Component{
    
    state = {
        articles:{},
        status: null
    }

    render(){
        var searched = this.props.match.params.search;
        return (
            <div id="blog">
                <Slider
                        title={'Busqueda: '+ searched}
                        size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {/*Listado de articulos que vendran del api rest de node*/}
                        <Articles
                            search={searched}
                        />
                    </div>
                    <Siderbar
                         blog = "true"
                    />
                </div>
                
            </div>
        );
    }
}

export default Search;