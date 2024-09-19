import '../assets/css/Navbar.css';
import { NAVBAR_DATA } from '../assets/data/NAVBAR_DATA';
import Popup from './Popup';

const Navbar = () => {
    return (
        <>
            <Popup />
            <div className="navbar-container">
                <div className="navbar-items">
                    {NAVBAR_DATA.map((navbarItem, index) => (
                        <button key={index} className="navbar-button">
                            {navbarItem.logo}
                            <p>{navbarItem.title}</p>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};


export default Navbar;
