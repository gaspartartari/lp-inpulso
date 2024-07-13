import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className='lp-footer lp-container'>
                <a href="https://www.instagram.com/inpulso.online" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='lp-footer-fa' icon={faInstagram} />
                </a>
                <p><i>  (11) 97449-4221</i></p>
            </div>
        </footer>
    );
}
