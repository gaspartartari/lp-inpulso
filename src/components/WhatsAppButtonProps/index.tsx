
import './styles.css';

interface WhatsAppButtonProps {
    number: string;
    text: string;
    message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ number, text, message }) => {
    const link = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    return (
        <div className='lp-whatsapp-button-container'>
            <a 
            href={link} 
            target='_blank' 
            rel='noopener noreferrer' 
            className='lp-whatsapp-button lp-container'
            onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (window as any).dataLayer.push({ 'event': 'schedule_button' });
            }}
            >
                {text}
            </a>


        </div>
    );
};

export default WhatsAppButton;
