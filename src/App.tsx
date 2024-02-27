import {
  CTABanner,
  CTABanner2,
  FAQ,
  HelpCenter,
  Hero,
  IndustryStatus,
  Nav,
  OurTeam,
  OurWork,
  Testimonial,
  WorkedCompany,
} from './components';

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <WorkedCompany />
      <IndustryStatus />
      <FAQ />
      <OurWork />
      <CTABanner />
      <OurTeam />
      <Testimonial />
      <CTABanner2 />
      <HelpCenter />
    </>
  );
};

export default App;
