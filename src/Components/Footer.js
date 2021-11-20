

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'rgb(102, 102, 102)', textAlign: 'center', color: '#fff' }}>
            {window.innerWidth < 768 ?
                <nav style={{justifyContent:'center',paddingTop:'16px'}}>
                    <a style={{color:'#fff'}} className="navLink" href='/سياسة-الخصوصية' title="سياسة-الخصوصية">سياسة الخصوصية</a>
                    <a style={{color:'#fff'}} className="navLink" href='/من-نحن' title="من-نحن">من نحن</a>
                    <a style={{color:'#fff'}} className="navLink" href='/تواصل-معنا' title="تواصل-معنا">تواصل معنا</a>
                </nav>  : ''}
                {window.innerWidth < 768 ?<hr style={{margin:'16px 0 0'}}/>:''}
            © 2016-2050 All Rights Reserved
        </footer>
    )
}


export default Footer;