import CardText from '../../../components/CardText';
import ServicesSection from '../../../components/ServiceSection';
import './styles.css';

export default function Home () {

    return (
        <main className='lp-container'>
          <CardText />
          <ServicesSection />
        </main>
    );
}