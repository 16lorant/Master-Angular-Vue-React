import React, {Component} from "react";
import logo from '../assets/images/logo.svg'

class Footer extends Component{
    render(){
        return(
            <footer id="footer">
                <div className="center">
                    <p>
                        &copy; Máster en frameworks para JavaScript
                    </p>
                </div>
            </footer>
        );
    }
}
export default Footer;