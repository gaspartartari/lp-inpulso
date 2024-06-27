import { NavLink } from 'react-router-dom';
import './styles.css';
import imgIcon from '../../assets/logo.png';

export default function Header() {


    return (
        <header className='lp-header'>

            <nav className='lp-container'>
                <div className='lp-header-nav-links'>
                    <NavLink to='/'>
                        Início
                    </NavLink>
                    <NavLink to='/'>
                        Serviços
                    </NavLink>
                    <NavLink to='/'>
                        Contato
                    </NavLink>
                </div>

                <div className='lp-header-nav-logo'>
                    <img src={imgIcon} alt="logo" />
                </div>
            </nav>








        </header>
    );
}