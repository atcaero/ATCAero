import { Navbar } from "../../components/Navbar";
import { AdvantagesSection } from "../../components/AdvantagesSection";
import Footer from "../../components/Footer";

export default function AdvantagesPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#C49A60] selection:text-black">
            <Navbar />
            <div className="pt-24">
                {/* Added padding-top to account for fixed navbar if applicable, or just generic spacing */}
                <AdvantagesSection />
            </div>
            <Footer />
        </div>
    );
}
