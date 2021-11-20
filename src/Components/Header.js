import { Component } from "react";
import Nav from "./Nav";
import logo from "../logo.png";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <header>
                <div className='header-container'>
                    <a href="/" title="Ghojah">
                        <img src={logo} alt='Ghojah Logo' />
                    </a>



                    <Nav />

                    <div className='actionContainer'>
                    <a className='SignIn' href='https://ghojah.com/GTOffice' title='تسجيل الدخول'>تسجيل الدخول</a>
                    </div>
                </div>
            </header>
        );
    }
}



export default Header;