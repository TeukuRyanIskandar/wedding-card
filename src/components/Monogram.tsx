import '../assets/css/Monogram.css'
import monogram from '../assets/images/monogram.png'

const Monogram = () => {    
    return (
        <div className="monogram-container">
            <div className="monogram-items">
                <div className="separator">
                    <img src={monogram} alt="rose-stalk" />
                </div>
            </div>
        </div>
    )
}

export default Monogram;