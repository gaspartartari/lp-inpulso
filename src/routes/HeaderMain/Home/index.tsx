import About from '../../../components/About';
import AboutUs from '../../../components/CardAboutUs';
import CardText from '../../../components/CardText';
import ClientsCarousel from '../../../components/ClientsCarousel';
import ClientsSection from '../../../components/ClientSection';
import FAQs from '../../../components/FAQs';
import Footer from '../../../components/Footer';
import InvestmentCounter from '../../../components/InvestMentCounter';
import ProblemsList from '../../../components/ProblemList';
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
      </section>
      <ScheduleButton />
      <section id="services">
        <ServicesSection />
      </section>
      <section id="investment">
        <InvestmentCounter />
      </section>
      <section id="clients-carousel">
        <ClientsCarousel />
      </section>
      <section id="problems">
        <ProblemsList />
      </section>
      <section id="schedule">
        <ScheduleMeeting />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <WhatsAppButton number={'51993415860'} text={'Chame no WhatsApp'} message={'Olá, gostaria de agendar uma consulta'} />
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
      <Footer />
    </main>
  );
}
