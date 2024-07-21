import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import './styles.css';
import Footer from '../../components/Footer';

export default function HeaderMain () {

    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
}