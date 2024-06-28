
import './styles.css';


export default function Testimonials() {



    return (
        <section className='lp-testimonials'>
            <div className='lp-container'>
                <h2>O que nossos clientes dizem</h2>
       
                <div className='lp-testimonials-grid'>
                    <div className='lp-testimonial'>
                        <p>"A empresa tem sido fundamental para o crescimento do nosso negócio. Excelente serviço!"</p>
                        <h3>Cliente 1</h3>
                    </div>
                    <div className='lp-testimonial'>
                        <p>"Profissionais dedicados e resultados incríveis. Recomendo a todos!"</p>
                        <h3>Cliente 2</h3>
                    </div>
                    <div className='lp-testimonial'>
                        <p>"Serviço impecável e resultados que superaram nossas expectativas."</p>
                        <h3>Cliente 3</h3>
                    </div>
                </div>
           
            </div>
        </section>
    );
}
