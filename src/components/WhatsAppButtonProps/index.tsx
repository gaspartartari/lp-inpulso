import React from 'react';
import './styles.css';

interface WhatsAppButtonProps {
    number: string;
    text: string;
    message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ number, text, message }) => {
    const link = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    return (
        <a href={link} target='_blank' rel='noopener noreferrer' className='lp-whatsapp-button'>
            {text}
        </a>
    );
};

export default WhatsAppButton;
