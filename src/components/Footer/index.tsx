import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className='lp-footer'>
            <div className='lp-footer-empresa'>
                <span>Inpulso Digital</span>
                <span>CNPJ 32.210.210/0001-97</span>
            </div>
            <div className='lp-footer-contact'>
                <a href="https://www.instagram.com/inpulso.online" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='lp-footer-fa' icon={faInstagram} />
                </a>
                <p><i>(11) 97449-4221</i></p>
            </div>
        </footer>
    );
}
