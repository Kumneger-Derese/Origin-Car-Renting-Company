import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import CarType from "./components/CarType.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import SpecialDeal from "./components/SpecialDeal.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Fleets from "./components/Fleets.jsx";
import Faq from "./components/Faq.jsx";
import News from "./components/News.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div className={'flex flex-col gap-y-32 bg-background text-base'}>
            <Hero/>
            <About/>
            <CarType/>
            <HowItWorks/>
            <SpecialDeal/>
            <Testimonials/>
            <Fleets/>
            <Faq/>
            <News/>
            <Footer/>
        </div>
    );
};

export default App;