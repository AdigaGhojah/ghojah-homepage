import MsgUpperPart from '../assets/msgUpperPart.png'
import MsgLowerPart from '../assets/msgLowerPart.png'
import backGround from '../assets/BackGround.jpg'


const WelcomeMsg = () => {
    return (
        <div style={{marginTop:'100px', backgroundImage:`url(${backGround}`,padding:'40px 0',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>

        <div style={
            { display: 'flex', flexDirection: 'column', width: '400px', height: '330px', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor:'rgba(255, 255, 255, 0.88)',borderRadius:'22px',margin:'0 auto'}}>
            <img src={MsgUpperPart} />
            <strong style={{color:'rgb(124, 90, 90)'}}>خدماتنا و مواقعنا</strong>
            <img src={MsgLowerPart} />
            <h3 style={{margin:'8px 0 16px'}}>أهلا بكم</h3>
            <p>نقدم لكم مجموعة خدماتنا ، قم بأخذ فكرة عن المواقع بالاطلاع على الملخصات بالاسفل <br />ستجد شيئا يناسبك بالتأكيد</p>
        </div>
        </div>
        )
}

export default WelcomeMsg;