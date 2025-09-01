import FinalCTA from "../components/common/cta";
import ServicesHero from "../components/services/hero";
import ServiceTabs from "./servicestab";

export default function Services() {
    return (
        <div>
            <ServicesHero />
            <ServiceTabs />
            <FinalCTA />
        </div>
    );
}