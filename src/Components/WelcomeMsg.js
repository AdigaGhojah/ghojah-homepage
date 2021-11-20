import MsgUpperPart from '../assets/msgUpperPart.png'
import MsgLowerPart from '../assets/msgLowerPart.png'
import backGround from '../assets/BackGround.jpg'
import './WelcomeMsg.css'


const WelcomeMsg = () => {
    return (
        <div className='backgroundCover'>

            <div className='msgContainer'>
                <img src={MsgUpperPart} />
                <strong style={{ color: 'rgb(124, 90, 90)' }}>خدماتنا و مواقعنا</strong>
                <img src={MsgLowerPart} />
                <h3 style={{ margin: '8px 0 16px' }}>أهلا بكم</h3>
                <p>نقدم لكم مجموعة خدماتنا ، قم بأخذ فكرة عن المواقع بالاطلاع على الملخصات بالاسفل <br />ستجد شيئا يناسبك بالتأكيد</p>
            </div>
        </div>
    )
}

export default WelcomeMsg;