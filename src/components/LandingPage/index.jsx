import HeroArea from "../HeroArea";
import Footer from "../Footer";
import AboutUs from "../AboutUs";
import Navbar from "../NavBar";
import Lenders from "../Lenders";
import Services from "../Services";
import Team from "../Team";
import Contact from "../Contact";

const LandingPage = () => {
  return (
    <>
    <Navbar />
      <HeroArea />
      <AboutUs />
      <Services />
      <Team />
      <Lenders />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
