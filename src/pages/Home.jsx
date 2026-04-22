import React from 'react';
import Hero from '../componenets/Hero';
import PainPoints from '../componenets/PainPoints';
import Results from '../componenets/Results';
import DashboardShowcase from '../componenets/DashboardShowcase';
import LocalReality from '../componenets/LocalReality';
import Integrations from '../componenets/Integrations';
import Testimonials from '../componenets/Testimonials';
import Pricing from '../componenets/Pricing';
import FAQ from '../componenets/FAQ';
import LeadForm from '../componenets/LeadForm';
import Footer from '../componenets/Footer';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <PainPoints />
      <Results />
      <DashboardShowcase />
      <LocalReality />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Home;