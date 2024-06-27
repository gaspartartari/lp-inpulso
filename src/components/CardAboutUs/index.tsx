import './styles.css';
import partner1Image from '../../assets/partner1.png';
import partner2Image from '../../assets/partner2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function AboutUs() {
    return (
        <section className='lp-about-us'>
            <div className='lp-container'>
                <h2>Sobre Nós</h2>
                <div className='lp-about-us-content'>
                    <div className='lp-about-us-text'>
                        <p>Somos uma equipe dedicada de especialistas em marketing digital e desenvolvimento de e-commerce. Com anos de experiência, ajudamos diversas empresas a crescerem suas presenças online e alcançarem seus objetivos.</p>
                    </div>
                    <div className='lp-about-us-partners'>
                        <div className='lp-partner'>
                            <img src={partner1Image} alt='Sócio 1' />
                            <p>Sócio 1</p>
                            <a href='https://www.linkedin.com/in/gaspartartari' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faLinkedin} size="2x" className="fa-icon" />
                            </a>
                        </div>
                        <div className='lp-partner'>
                            <img src={partner2Image} alt='Sócio 2' />
                            <p>Sócio 2</p>
                            <a href='https://www.linkedin.com/in/murilo-galante-silva-04240229' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faLinkedin} size="2x" className="fa-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
