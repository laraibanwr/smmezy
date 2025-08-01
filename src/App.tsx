import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import Chatbot from './components/Chatbot';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Clients from './components/Clients';
import NotFound from './pages/NotFound';
import Appointment from './pages/Appointment';

function ScrollToTop() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    const isFromProjectDetail = location.state?.fromProjectDetail === true;
    const isFromAppointment = location.state?.fromAppointment === true;

    const shouldScrollToTop =
      !location.pathname.startsWith('/project') &&
      !isFromAppointment &&
      !isFromProjectDetail &&
      !scrollTo;

    // Scroll to top on general route change
    if (shouldScrollToTop && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Scroll to hash (like #contact)
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          const yOffset = -80;
          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }

    // Scroll to section passed via state (e.g., { scrollTo: "#services" })
    if (scrollTo) {
      const target = document.querySelector(scrollTo);
      if (target) {
        setTimeout(() => {
          const yOffset = -80;
          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }

      // Clear the scrollTo state so it doesn't repeat
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen overflow-x-clip selection:bg-purple-500 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <WhyChoose />
                <Portfolio />
                <Clients />
                <Testimonials />
                <Contact />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/book-appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;