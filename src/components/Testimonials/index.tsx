
import './styles.css';


export default function Testimonials() {



    return (
        <section className='lp-testimonials'>
            <div className='lp-container'>
                <h2>O que nossos clientes dizem</h2>

                <div className='lp-testimonials-grid'>
                    <div className='lp-testimonial'>
                        <p>"O site tá ficando um arraso! 🚀
                        Vocês estão de parabéns com o serviço prestado. 👏 "</p>
                        <h3>Manfrim Store</h3>
                    </div>
                    <div className='lp-testimonial'>
                        <p>"A InPulso foi essencial para a transformação digital da Adapa Bio. Estou muito feliz com o resultado. "</p>
                        <h3>Adapa Bio</h3>
                    </div>
                    <div className='lp-testimonial'>
                        <p>"Empresa excepcional na comunicação. Sempre disponíveis para esclarecer dúvidas e atualizações."</p>
                        <h3>Singa</h3>
                    </div>
                    <div className='lp-testimonial'>
                        <p>"Trabalhar com eles não só trouxe melhores resultados para nosso negócio, mas também nos educou sobre marketing digital."</p>
                        <h3>Café Morro Grande</h3>
                    </div>
                </div>

            </div>
        </section>
    );
}
