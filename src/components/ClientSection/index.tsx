import { useEffect } from 'react';
import './styles.css';
import client1Image from '../../assets/cliente1.jpg';
import client2Image from '../../assets/cliente2.jpg';
import client3Image from '../../assets/cliente3.jpg';
import client4Image from '../../assets/cliente4.jpg';



export default function ClientsSection() {


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        const clientCards = document.querySelectorAll('.lp-client-card');
        clientCards.forEach(card => {
            observer.observe(card);
        });
    }, []);

    return (
        <section className='lp-clients'>
            <div className='lp-container'>
                <h2>Nossos Clientes</h2>
                <div className='lp-clients-grid'>
                    <div className='lp-client-card'>
                        <img src={client1Image} alt='Cliente 1' />
                        <p>Singa</p>
                        <blockquote>
                            "A empresa tem sido fundamental para o crescimento do nosso negócio. Excelente serviço!"
                        </blockquote>
                    </div>
                    <div data-aos="fade-up" className='lp-client-card'>
                        <img src={client2Image} alt='Cliente 2' />
                        <p>Soleah</p>
                        <blockquote>
                            "Profissionais dedicados e resultados incríveis. Recomendo a todos!"
                        </blockquote>
                    </div>
                    <div className='lp-client-card'>
                        <img src={client3Image} alt='Cliente 3' />
                        <p>Eulíricas</p>
                        <blockquote>
                            "Serviço impecável e resultados que superaram nossas expectativas."
                        </blockquote>
                    </div>
                    <div className='lp-client-card'>
                        <img src={client4Image} alt='Cliente 4' />
                        <p>Marilia Chiele Jóias</p>
                        <blockquote>
                            "Estamos extremamente satisfeitos com os serviços prestados. Parceria de sucesso!"
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
