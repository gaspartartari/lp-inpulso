import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faPinterest, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

export default function ServicesSection() {
    return (
        <section className='lp-services'>
            <div className='lp-container'>
                <h2>Nossos Serviços</h2>
                <div className='lp-services-grid'>
                    <div className='lp-service-card'>
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        <FontAwesomeIcon icon={faGoogle} size="2x" />
                        <FontAwesomeIcon icon={faPinterest} size="2x" />
                        <FontAwesomeIcon icon={faTiktok} size="2x" />
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        <p>Mídia Paga</p>
                    </div>
                    <div className='lp-service-card'>
                        <FontAwesomeIcon icon={faGoogle} size="2x" />
                        <p>Traqueamento (Google Tag Manager)</p>
                    </div>
                    <div className='lp-service-card'>
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                        <p>Construção e Migração de e-commerce</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
