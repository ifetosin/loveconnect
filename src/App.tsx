import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import PodcastLinks from "./components/PodcastLinks";
import BookSection from "./components/BookSection";
import RegistrationForm from "./components/RegistrationForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);

  // Smooth scroll for navigation
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleScroll);
    return () => document.removeEventListener("click", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero onRegisterClick={() => setIsRegistrationOpen(true)} />
      <About />
      <BookSection/>
      <PodcastLinks />
      <Testimonials />
      <Footer />

      <RegistrationForm
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </div>
  );
}

export default App;
