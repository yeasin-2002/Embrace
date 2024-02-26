import {
  CTABanner,
  CTABanner2,
  FAQ,
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
    </>
  );
};

export default App;
