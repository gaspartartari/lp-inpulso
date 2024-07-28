/* eslint-disable @typescript-eslint/no-explicit-any */

import './styles.css';




export default function ScheduleButton() {
    return (
        <div className='lp-schedule-button-container-bg'>

            <a
                href='https://calendly.com/gaspartartari'
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => {
                    (window as any).dataLayer.push({'event': 'schedule_button'});
                  }}                className='lp-schedule-button'>
                Agendar Consulta
            </a>

        </div>
    );
}


