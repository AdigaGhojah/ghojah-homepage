

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'rgb(102, 102, 102)', textAlign: 'center', color: '#fff' }}>
            {window.innerWidth < 768 ?
                <nav style={{justifyContent:'center',paddingTop:'16px'}}>
                    <a style={{color:'#fff'}} className="navLink" href='https://ghojah.com/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9' title="سياسة-الخصوصية">سياسة الخصوصية</a>
                    <a style={{color:'#fff'}} className="navLink" href='https://ghojah.com/%D9%85%D9%86-%D9%86%D8%AD%D9%86' title="من-نحن">من نحن</a>
                    <a style={{color:'#fff'}} className="navLink" href='https://ghojah.com/%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7' title="تواصل-معنا">تواصل معنا</a>
                </nav>  : ''}
                {window.innerWidth < 768 ?<hr style={{margin:'16px 0 0'}}/>:''}
            © 2016-2050 All Rights Reserved
        </footer>
    )
}


export default Footer;