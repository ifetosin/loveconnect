import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import PodcastLinks from "./components/PodcastLinks";
import BookSection from "./components/BookSection";
import RegistrationForm from "./components/RegistrationForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const ReadBook = () => {
  return (
    <div className="w-screen h-screen">
      <iframe
      src="https://docs.google.com/viewer?srcid=1gGVhBDPjdQhL23o3VB-xwD8m3ZD6lt8S&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  // Smooth scroll for navigation
useEffect(() => {
  const handleScroll = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.tagName === "A") {
      const anchor = target as HTMLAnchorElement;

      if (anchor.hash) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  document.addEventListener("click", handleScroll);
  return () => document.removeEventListener("click", handleScroll);
}, []);

  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Hero onRegisterClick={() => setIsRegistrationOpen(true)} />
              <About />
              <BookSection />
              <PodcastLinks />
              <Testimonials />
              <Footer />

              <RegistrationForm
                isOpen={isRegistrationOpen}
                onClose={() => setIsRegistrationOpen(false)}
              />
            </div>
          }
        />

        {/* Read Book page */}
        <Route path="/blooming-together" element={<ReadBook />} />
      </Routes>
    </Router>
  );
}

export default App;
