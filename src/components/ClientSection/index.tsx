import { useEffect } from 'react';
import './styles.css';
import client1Image from '../../assets/cliente1.jpg';
import client2Image from '../../assets/cliente2.jpg';
import client3Image from '../../assets/cliente3.jpg';
import client4Image from '../../assets/cliente4.jpg';
import client5Image from '../../assets/cliente5.png';
import client6Image from '../../assets/cliente6.jpg';
import client7Image from '../../assets/cliente7.jpg';
import client8Image from '../../assets/cliente8.png';



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
                <h2>Veja alguns de nossos cases</h2>
                <div className='lp-clients-grid'>
                    <div className='lp-client-card'>
                        <a href='https://www.singapurastore.com.br' target='_blank' rel='noopener noreferrer'>
                            <img src={client1Image} alt='Singapura Store' />
                            <p>Singa</p>
                            <blockquote>
                                "Crescimento de 450% YoY gerindo CRM e Mídia Paga"
                            </blockquote>
                        </a>
                    </div>
                    <div data-aos="fade-up" className='lp-client-card'>
                        <a href="https://www.soleah.com.br/" target='_blank' rel='noopener noreferrer'>
                            <img src={client2Image} alt='Soleah Bolsas' />
                            <p>Soleah</p>
                            <blockquote>
                                "Correção de bugs no trackeamento e melhoria de performance"
                            </blockquote>
                        </a>
                    </div>
                    <div className='lp-client-card'>
                        <a href="https://www.euliricas.com.br/" target='_blank' rel='noopener noreferrer'>
                            <img src={client3Image} alt='Eulíricas' />
                            <p>Eulíricas</p>
                            <blockquote>
                                "Serviço impecável e resultados que superaram nossas expectativas."
                            </blockquote>
                        </a>
                    </div>
                    <div className='lp-client-card'>
                        <a href="https://www.mariliachielejoias.com.br/" target='_blank' rel='noopener noreferrer'>
                            <img src={client4Image} alt='Marília Chiele Joias' />
                            <p>Marilia Chiele Jóias</p>
                            <blockquote>
                                "Lançamento das primerias campanhas de mídia paga no Google Ads, duplicando faturamento em 3 meses"
                            </blockquote>
                        </a>
                    </div>
                    <div className='lp-client-card'>
                        <a href="https://www.manfrimstore.com.br/" target='_blank' rel='noopener noreferrer'>
                            <img src={client5Image} alt='Manfrim Store' />
                            <p>Manfrim Store</p>
                            <blockquote>
                                "100K faturados no primeiro mês de Google Ads com ROAS de 1000%. Correção de bugs no traqueamento.
                                 Migracao de plataforma de E-commerce  "
                            </blockquote>
                        </a>
                    </div>
                    <div className='lp-client-card'>
                        <a href="https://adapabio.com/" target='_blank' rel='noopener noreferrer'>
                            <img src={client6Image} alt='Adapa Bio' />
                            <p>Adapa Bio</p>
                            <blockquote>
                                "Ciração do site na plataforma Shopify e implementação de estrutura de acompanhamento de conversão"
                            </blockquote>
                        </a>
                    </div>
                    <div className='lp-client-card'>
                        <a href="https://missli.com.br/" target='_blank' rel='noopener noreferrer'>
                            <img src={client7Image} alt='Miss Li' />
                            <p>Miss Li</p>
                            <blockquote>
                                "Mentoria sobre anúncios online e saúde digital da empresa, correção de bugs no traqueamento e melhoria de performance"
                            </blockquote>
                        </a>
                    </div>
                    <div className='lp-client-card'>
                        <a href="https://nodacozinha.com.br/" target='_blank' rel='noopener noreferrer'>
                            <img src={client8Image} alt='Noda' />
                            <p>Noda</p>
                            <blockquote>
                                "Gestão de CRM e Mídia Paga, incluindo automação de e-mail marketing"
                            </blockquote>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
