import '../assets/css/Popup.css'
import { CONTACT_DATA } from '../assets/data/POPUP_DATA';

const Popup = () => {
    return (
        <div className="popup-container">
            <div className="popup-items">
                <div className="popup-title">
                    <h2>Contact</h2>
                </div>
                {CONTACT_DATA.map((contactItem, index) => (
                    <div key={index} className='contact-info'>
                        <div className="name-and-title">
                            <p>{contactItem.name}</p>
                            <small>{contactItem.title}</small>
                        </div>
                        <div className="whatsapp-and-phone">
                            {contactItem.whatsappLogo}
                            {contactItem.phoneLogo}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Popup;