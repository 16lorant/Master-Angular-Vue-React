import React,{Component} from "react";
import Slider from "./Slider";
import Siderbar from "./Siderbar";
import Articles from "./Articles";

class Blog extends Component{
    
    state = {
        articles:{},
        status: null
    }

    render(){
        return (
            <div id="blog">
                <Slider
                        title="Blog"
                        size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {/*Listado de articulos que vendran del api rest de node*/}
                        <Articles/>
                    </div>
                    <Siderbar
                         blog = "true"
                    />
                </div>
                
            </div>
        );
    }
}

export default Blog;