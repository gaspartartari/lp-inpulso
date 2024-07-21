import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import HeaderMain from './routes/HeaderMain';
import Home from './routes/HeaderMain/Home';
import './index.css';
import ROASPage from './routes/HeaderMain/ROASPage';
import { useEffect } from 'react';

const ScrollToSection = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.state && location.state.targetId) {
            const element = document.getElementById(location.state.targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return null;
};

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToSection />
                <Routes>
                    <Route path='/' element={<HeaderMain />}>
                        <Route index element={<Navigate to='/home' />} />
                        <Route path='home' element={<Home />}></Route>
                        <Route path='roas' element={<ROASPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
