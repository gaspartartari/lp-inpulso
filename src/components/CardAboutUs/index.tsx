import './styles.css';
import partner1Image from '../../assets/partner1.png';
import partner2Image from '../../assets/partner2.png';

export default function AboutUs() {
    return (
        <section className='lp-about-us'>
            <div className='lp-container'>
                <h2>Sobre Nós</h2>
                <p>Na InPulso, unimos a expertise de dois profissionais com vasta experiência no mercado para oferecer mais do que simples resultados de performance. 
                    Valorizamos o entendimento profundo do negócio de cada cliente, pois acreditamos que essa sinergia é fundamental para alcançar resultados verdadeiramente significativos. 
                    Nosso compromisso vai além da entrega de métricas; estamos aqui para ajudar nossos clientes a decifrar e otimizar sua presença no mundo digital, alinhada às necessidades específicas de sua operação.</p>
                <div className='lp-about-us-content'>
                    <div className='lp-partner-card'>
                        <img src={partner1Image} alt='Murilo Galante da Silva' />
                        <h3>Murílo Galante</h3>
                        <p>Profissional com mais de 10 anos de experiência em marketing digital. Tem uma abordagem omnichannel para criar pontos de contato estratégicos com os clientes.</p>
                        <a href='https://www.linkedin.com/in/murilo-galante-silva-04240229' target='_blank' rel='noopener noreferrer'>
                            LinkedIn
                        </a>
                    </div>
                    <div className='lp-partner-card'>
                        <img src={partner2Image} alt='Gaspar Tartari' />
                        <h3>Gaspar Tartari</h3>
                       <p>Empreendedor, programador e especialista em tráfego pago com mais de 5 anos de experiência. Sólido conhecimento do ambiente tecnológico e de negócios.</p>
                        <a href='https://www.linkedin.com/in/gaspartartari' target='_blank' rel='noopener noreferrer'>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
