import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import './index.css';
import { useEffect } from 'react';
import ROASPage from './routes/ROASPage';


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
                    <Route path='/' element={<Home />}>
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
