import { useEffect, useRef } from 'react';
import './styles.css';
import client1 from '../../assets/logos-clientes/1.jpg';
import client2 from '../../assets/logos-clientes/2.jpg';
import client3 from '../../assets/logos-clientes/3.jpg';
import client4 from '../../assets/logos-clientes/4.jpg';
import client5 from '../../assets/logos-clientes/5.jpg';
import client6 from '../../assets/logos-clientes/6.jpg';
import client7 from '../../assets/logos-clientes/7.jpg';

const clients = [client1, client2, client3, client4, client5, client6, client7];

export default function ClientsCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        let scrollAmount = 0;

        const autoScroll = () => {
            if (carousel) {
                if (scrollAmount >= carousel.scrollWidth / 2) {
                    scrollAmount = 0;
                } else {
                    scrollAmount += 1;
                }
                carousel.scrollLeft = scrollAmount;
            }
        };

        const interval = setInterval(autoScroll, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container w-full bg-white py-5 overflow-hidden relative flex justify-center items-center">
            <div className="carousel flex" ref={carouselRef}>
                {clients.map((client, index) => (
                    <div key={index} className="carousel-item flex justify-center items-center h-24">
                        <img src={client} alt={`Client ${index + 1}`} className="h-full object-contain" />
                    </div>
                ))}
                {clients.map((client, index) => (
                    <div key={index + clients.length} className="carousel-item flex justify-center items-center h-24">
                        <img src={client} alt={`Client ${index + clients.length + 1}`} className="h-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    );
}
