import AboutUs from '../../../components/CardAboutUs';
import CardText from '../../../components/CardText';
import ClientsSection from '../../../components/ClientSection';
import ServicesSection from '../../../components/ServiceSection';
import './styles.css';

export default function Home () {

    return (
        <main className='lp-container'>
          <CardText />
          <ServicesSection />
          <AboutUs />
          <ClientsSection />
        </main>
    );
}