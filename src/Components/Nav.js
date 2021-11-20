import { Component } from "react";
import './Nav.css'



class Nav extends Component {
    render() {
        return (window.innerWidth>=768 ? 
        <nav>
            <a className="navLink" href='https://ghojah.com/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9' title="سياسة-الخصوصية">سياسة الخصوصية</a>
            <a className="navLink" href='https://ghojah.com/%D9%85%D9%86-%D9%86%D8%AD%D9%86' title="من-نحن">من نحن</a>
            <a className="navLink" href='https://ghojah.com/%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7' title="تواصل-معنا">تواصل معنا</a>
        </nav> : '');
    }
}



export default Nav;