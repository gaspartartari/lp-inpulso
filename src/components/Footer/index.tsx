import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className='lp-footer lp-container'>
               
                    <FontAwesomeIcon className='lp-footer-fa' icon={faInstagram}></FontAwesomeIcon>
                    <p><i> Rua da Pipoca, 150</i></p>
             
            </div>

        </footer>
    )
}


