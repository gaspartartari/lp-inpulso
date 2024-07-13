import './styles.css';

export default function ScheduleMeeting() {
    return (
        <section className='lp-schedule-meeting'>
            <div className='lp-container'>
                <h2>Agende uma Reunião Gratuita</h2>
                <p>Converse conosco por 30 minutos e descubra como podemos ajudar o seu negócio a crescer.</p>
                <div className='lp-schedule-button-container'>
                    <a href='https://calendly.com/gaspartartari' target='_blank' rel='noopener noreferrer' className='lp-schedule-button'>
                        Agendar Agora
                    </a>
                </div>
            </div>
        </section>
    );
}
