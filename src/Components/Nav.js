import { Component } from "react";
import './Nav.css'



class Nav extends Component {
    render() {
        return (true ? 
        <nav>
            <a className="navLink" href='/سياسة-الخصوصية' title="سياسة-الخصوصية">سياسة الخصوصية</a>
            <a className="navLink" href='/من-نحن' title="من-نحن">من نحن</a>
            <a className="navLink" href='/تواصل-معنا' title="تواصل-معنا">تواصل معنا</a>
        </nav> : '321');
    }
}



export default Nav;