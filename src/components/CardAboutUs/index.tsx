import './styles.css';
import partner1Image from '../../assets/partner1.png';
import partner2Image from '../../assets/partner2.png';

export default function AboutUs() {
    return (
        <section className='lp-about-us'>
            <div className='lp-container'>
                <h2>Sobre Nós</h2>
                <div className='lp-about-us-content'>
                    <div className='lp-partner-card'>
                        <img src={partner1Image} alt='Sócio 1' />
                        <h3>Sócio 1</h3>
                        <p>Descrição breve sobre Sócio 1. Experiência, habilidades e contribuições para a empresa.</p>
                        <a href='https://www.linkedin.com/in/socio1' target='_blank' rel='noopener noreferrer'>
                            LinkedIn
                        </a>
                    </div>
                    <div className='lp-partner-card'>
                        <img src={partner2Image} alt='Sócio 2' />
                        <h3>Sócio 2</h3>
                        <p>Descrição breve sobre Sócio 2. Experiência, habilidades e contribuições para a empresa.</p>
                        <a href='https://www.linkedin.com/in/socio2' target='_blank' rel='noopener noreferrer'>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
