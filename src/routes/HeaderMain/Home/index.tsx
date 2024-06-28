import About from '../../../components/About';
import AboutUs from '../../../components/CardAboutUs';
import CardText from '../../../components/CardText';
import ClientsSection from '../../../components/ClientSection';
import FAQs from '../../../components/FAQs';
import InvestmentCounter from '../../../components/InvestMentCounter';
import ScheduleButton from '../../../components/ScheduleButtonProps';
import ScheduleMeeting from '../../../components/ScheduleMeeting';
import ServicesSection from '../../../components/ServiceSection';
import Testimonials from '../../../components/Testimonials';
import WhatsAppButton from '../../../components/WhatsAppButtonProps';
import './styles.css';

export default function Home() {
  return (
    <main className='lp-container'>
      <section id="home">
        <CardText />
        <ScheduleButton />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="investment">
        <InvestmentCounter />
        <ScheduleMeeting />
      </section>
      <section id="about-us">
        <AboutUs />
        <WhatsAppButton number={'51993415860'} text={'Chame no WhatsApp'} message={'Olá, gostaria de agendar uma consulta'} />
      </section>
      <section id="clients">
        <ClientsSection />
      </section>
      <section id="faqs">
        <FAQs />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
    </main>
  );
}
