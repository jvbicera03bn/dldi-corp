import AboutUs from "@/components/AboutUs";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";
import HomeSect from "@/components/HomeSect";
import Services from "@/components/Services";
export default function Home() {
    return (
        <div className={``}>
            <HomeSect />
            <div className="flex flex-col justify-center">
                <Services />
                <AboutUs />
                <Branches />
                <Footer/>
            </div>
        </div>
    );
}
