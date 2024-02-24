import {
  CTABanner,
  FAQ,
  Hero,
  IndustryStatus,
  Nav,
  OurWork,
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
    </>
  );
};

export default App;
