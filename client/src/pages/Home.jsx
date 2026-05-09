import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import LoanServices from '../components/LoanServices';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import FaqSection from '../components/FaqSection';

const HomePage = () => {
    return (
        <div className="bg-white min-h-screen font-sans overflow-x-hidden">
            <Hero />
            <Introduction />
            <FeaturesSection />
            <LoanServices />
            <HowItWorks />
            <FaqSection />
        </div>
    );
};

export default HomePage;

