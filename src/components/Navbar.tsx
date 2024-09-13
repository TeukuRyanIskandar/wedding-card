import '../assets/css/Navbar.css';
import { NAVBAR_DATA } from '../assets/data/NAVBAR_DATA';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-items">
            <ul>
                    {NAVBAR_DATA.map((navbarItem, index) => (
                        <li key={index}>
                            {navbarItem.logo}
                            <p>{navbarItem.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
