import './App.css'
import { createBrowserRouter } from "react-router-dom";
import ContactBadge from './components/Common/ContactBadge.jsx';
import FAQSection from './components/Home/FAQSection.jsx';
import Footer from './components/Common/Footer.jsx';
import Header from './components/Common/Header.jsx';
import HealthInsuranceHero from './components/Health Insurance/HealthInsuranceHero.jsx';
import Hero from './components/Home/hero.jsx';
import Insurance from './components/Home/insurance.jsx';
import InsuredSteps from './components/Home/InsuredSteps.jsx';
import TestimonialsSection from './components/Home/Testimonials.jsx';
import CarInsuranceHero from './components/Car Insurance/CarInsurance.jsx';
import CarDetail from './components/Car Insurance/CarDetail.jsx';
import HealthPlansPage from './components/Health Insurance/HealthPlansPage.jsx';




function Home() {
  return (


    <>
      <Header />
    <Hero/>
    <Insurance/>
    <InsuredSteps/>
    <TestimonialsSection/>
    <FAQSection/>
    <ContactBadge/>
    <Footer/>
    {/* <HealthInsuranceHero/> */}
   
   
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/health-insurance",
    element: <HealthInsuranceHero />,
  },
  {
    path: "/car-insurance",
    element: <CarInsuranceHero />,
  },
  {
    path: "/car-detail",
    element: <CarDetail />,
  },
  {
  path: "/healthplanpage",
  element: <HealthPlansPage />,
}
]);

export default router;
