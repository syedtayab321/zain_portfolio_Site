import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./../components/navbar";
import Hero from "./../components/hero";
import About from "./../components/about";
import Skills from "./../components/skills";
import Projects from "./../components/projects";
import Testimonials from "./../components/testominals";
import Contact from "./../components/contact";
import Footer from "./../components/footer";
import Loading from "./../utils/loading";
import ScrollToTop from "./../utils/scroll-to-top";
import "./../index.css";

function MainPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Testimonials />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default MainPage;
