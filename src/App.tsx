import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

  useEffect(() => {
    const isFromProjectDetail = location.state?.fromProjectDetail === true;
    const isFromAppointment = location.state?.fromAppointment === true;
    const scrollTo = location.state?.scrollTo;

    const shouldScrollToTop =
      !location.pathname.startsWith('/project') &&
      !isFromAppointment &&
      !isFromProjectDetail &&
      !scrollTo;

    // 1. Scroll to top (default)
    if (shouldScrollToTop && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 2. Scroll to hash (like #contact)
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'auto' });
      }
    }

    // 3. Scroll to section passed from navigation (like #about, #services)
    if (scrollTo) {
      const target = document.querySelector(scrollTo);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 300); // wait for the page transition
      }
    }
  }, [location]);

  return null;
}


function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-clip selection:bg-purple-500 selection:text-white">
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
                <Chatbot />
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