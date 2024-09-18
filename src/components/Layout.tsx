import '../assets/css/Layout.css'
import Navbar from './Navbar';
import Wisteria from '../assets/images/wisteria-2.png'

const Layout = () => {
    return (
    <div className="layout-container">
        <div className="layout-area">
            <img src={Wisteria} />
        </div>
        <Navbar/>
    </div>
    )
}

export default Layout;