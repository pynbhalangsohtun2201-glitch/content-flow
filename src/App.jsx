import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Challenges from "./Components/Challenges";
import SolutionsShowcase from "./Components/SolutionsShowcase";
import EmpowersSection from "./Components/EmpowersSection";
import TestimonialSection from "./Components/TestimonialSection";
import FAQSection from "./Components/FAQSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full">
      <Navbar />

      <main>
        {/* The Landing Page Section with the specific gradient */}
        <Hero />
        {/* The Next Section (Example) */}
        {/* Challenges Section */}
        <Challenges />
        <SolutionsShowcase />
        <EmpowersSection />
        <TestimonialSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
}
export default App;
