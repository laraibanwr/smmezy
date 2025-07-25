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
import ProjectDetail from './components/ProjectDetail';
import Chatbot from './components/Chatbot';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Chatbot from './components/Chatbot';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const shouldScrollToTop =
      !location.pathname.startsWith('/project') ||
      location.state?.fromProjectDetail !== true;

    if (shouldScrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Scroll to section if state.scrollTo exists
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-purple-500 selection:text-white">
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
                <Testimonials />
                <Chatbot />
                <Contact />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
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