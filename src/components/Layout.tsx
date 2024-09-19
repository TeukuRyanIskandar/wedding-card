import '../assets/css/Layout.css'
import Navbar from './Navbar';
import Monogram from './Monogram';
import Arc from './Arc';

const Layout = () => {
    return (
        <div className="layout-container">
            <div className="layout-area">
                <Arc />
                <Monogram />
                <Navbar />
            </div>
        </div>
    )
}

export default Layout;