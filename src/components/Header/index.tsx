import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles.css';
import imgIcon from '../../assets/logo.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='lp-header'>
            <nav className='lp-container'>
                <div className='lp-header-nav-logo'>
                    <img src={imgIcon} alt="logo" />
                </div>
                <div className={`lp-header-nav-links ${isOpen ? 'open' : ''}`}>
                    <a href="#home" onClick={() => setIsOpen(false)}>Início</a>
                    <a href="#services" onClick={() => setIsOpen(false)}>Serviços</a>
                    <a href="#investment" onClick={() => setIsOpen(false)}>Investimentos</a>
                    <a href="#about-us" onClick={() => setIsOpen(false)}>Sobre Nós</a>
                    <a href="#clients" onClick={() => setIsOpen(false)}>Clientes</a>
                    <a href="#faqs" onClick={() => setIsOpen(false)}>FAQs</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#testimonials" onClick={() => setIsOpen(false)}>Depoimentos</a>
                </div>
                <div className='lp-menu-icon' onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </nav>
        </header>
    );
}
