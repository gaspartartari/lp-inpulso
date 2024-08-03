import './styles.css';
import AboutUs from '../../../components/CardAboutUs';
import CardText from '../../../components/CardText';
import ClientsCarousel from '../../../components/ClientsCarousel';
import ClientsSection from '../../../components/ClientSection';
import FAQs from '../../../components/FAQs';
import InvestmentCounter from '../../../components/InvestMentCounter';
import ProblemsList from '../../../components/ProblemList';
import ScheduleButton from '../../../components/ScheduleButtonProps';
import ScheduleMeeting from '../../../components/ScheduleMeeting';
import ServicesSection from '../../../components/ServiceSection';
import Testimonials from '../../../components/Testimonials';
import VideoPlayer from '../../../components/VideoPlayerProps';
import WhatsAppButton from '../../../components/WhatsAppButtonProps';
import videoMarketing from '../../../assets/videoMarketing.mp4';
import { useEffect } from 'react';


export default function Home() {

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer.push({ 'event': 'page_view' });
  }, []);

  return (
    <main >
      <div className='lp-main-text-video-desktop'>
        <div className='lp-container lp-flex-control' >
          <section className='' id="home">
            <CardText />
          </section>
          <VideoPlayer src={videoMarketing} />
        </div>
      </div>
      <div className='lp-sbtn-display-control'>
        <ScheduleButton />
      </div>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="investment">
        <InvestmentCounter />
      </section>
      <section id="clients-carousel" >
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
      <section id="clients">
        <ClientsSection />
      </section>
      <WhatsAppButton number={'5551993415860'} text={'Chame no WhatsApp'} message={'Olá, gostaria de agendar uma consulta'} />

      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faqs">
        <FAQs />
      </section>


    </main>
  );
}
