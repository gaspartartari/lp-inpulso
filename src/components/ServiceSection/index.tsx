import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import { faFacebook, faGoogle, faLinkedin, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faTags } from '@fortawesome/free-solid-svg-icons';

export default function ServicesSection() {
    return (
        <section className='lp-services'>
            <div className='lp-container'>
                <h2>Nossos Serviços</h2>
                <div className='lp-services-grid'>
                    <div className='lp-service-card'>
                        <div className="lp-icons">
                            <FontAwesomeIcon icon={faFacebook} size="2x" className="fa-icon" />
                            <FontAwesomeIcon icon={faGoogle} size="2x" className="fa-icon" />
                            <FontAwesomeIcon icon={faPinterest} size="2x" className="fa-icon" />
                            <FontAwesomeIcon icon={faTiktok} size="2x" className="fa-icon" />
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="fa-icon" />
                        </div>
                        <p>Mídia Paga</p>
                    </div>
                    <div className='lp-service-card'>
                        <div className="lp-icons">
                            <FontAwesomeIcon icon={faTags} size="2x" className="fa-icon" />
                        </div>
                        <p>Traqueamento (Google Tag Manager)</p>
                    </div>
                    <div className='lp-service-card'>
                        <div className="lp-icons">
                            <FontAwesomeIcon icon={faShoppingCart} size="2x" className="fa-icon" />
                        </div>
                        <p>Construção e Migração de e-commerce</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
