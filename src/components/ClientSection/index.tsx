import './styles.css';
import client1Image from '../../assets/cliente1.jpg';
import client2Image from '../../assets/cliente2.jpg';
import client3Image from '../../assets/cliente3.jpg';
import client4Image from '../../assets/cliente4.jpg';

export default function ClientsSection() {
    return (
        <section className='lp-clients'>
            <div className='lp-container'>
                <h2>Um Pouco dos Nossos Parceiros</h2>
                <div className='lp-clients-grid'>
                    <div className='lp-client-card'>
                        <img src={client1Image} alt='Cliente 1' />
                        <p>Singa</p>
                    </div>
                    <div className='lp-client-card'>
                        <img src={client2Image} alt='Cliente 2' />
                        <p>Soleah</p>
                    </div>
                    <div className='lp-client-card'>
                        <img src={client3Image} alt='Cliente 3' />
                        <p>Eulíricas</p>
                    </div>
                    <div className='lp-client-card'>
                        <img src={client4Image} alt='Cliente 4' />
                        <p>Marilia Chiele Jóias</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
