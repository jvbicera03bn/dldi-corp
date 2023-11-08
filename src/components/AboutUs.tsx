import Image from "next/image";

interface aboutUsInfos {
    title: string;
    logo: string;
    description: string;
}

function AboutUs() {
    const aboutUsInfos: Array<aboutUsInfos> = [
        {
            title: "Dedication to Exceptional Service",
            logo: "/AboutUsAssets/teeth-clean.svg",
            description:
                "At our dental clinic, we prioritize delivering exceptional service to all our patients. Your oral health and comfort are our top concerns, and we are committed to providing you with the best possible care.",
        },
        {
            title: "Valuing Our Team Members",
            logo: "/AboutUsAssets/dentist.svg",
            description:
                "We believe in the importance of a happy and motivated team. Our dedicated employees ensure that you receive the best dental care with a smile. We value and support our team to ensure they can provide you with the highest standard of service.",
        },
        {
            title: "Customer Experience Excellence",
            logo: "/AboutUsAssets/patient.svg",
            description:
                "Our goal is to make your visit to our dental clinic a memorable and positive experience. We focus on excellence in every aspect of your journey with us, from the moment you walk in the door to the moment you leave.",
        },
        {
            title: "Customer Satisfaction",
            logo: "/AboutUsAssets/hot-coffee.svg",
            description:
                "Your well-being and satisfaction as a patient are of utmost importance to us. We strive to ensure your comfort, address your concerns, and leave you with a smile on your face after every visit.",
        },
        {
            title: "Welcoming for All Ages",
            logo: "/AboutUsAssets/happy-teeth.svg",
            description:
                "Our dental clinic is designed to be a warm and inviting place for patients of all ages. Whether you're bringing your children or coming in for your own treatment, we provide a family-friendly environment that makes everyone feel at home.",
        },
        {
            title: "State-of-the-Art Equipment",
            logo: "/AboutUsAssets/dentist-chair.svg",
            description:
                "We invest in the latest and most advanced dental equipment to guarantee that you receive top-of-the-line care. Our cutting-edge technology enhances the precision and effectiveness of your treatment, ensuring the best results for your dental health.",
        },
    ];
    return (
        <div
            className={`flex snap-center scroll-mt-[4.4375rem] flex-col bg-blue-600 py-10 text-white`}
        >
            <h1 className="text-center text-3xl font-bold text-white">
                ABOUT US
            </h1>
            <div className="py-10 px-48 flex gap-10 flex-wrap justify-around">
                {aboutUsInfos.map((item, key) => {
                    return (
                        <div key={key} className="flex gap-2 ">
                            <Image
                                className="logos"
                                src={item.logo}
                                alt=""
                                width="100"
                                height="65"
                            />
                            <div>
                                <h1 className=" text-2xl ">{item.title}</h1>
                                <p className="text-sm text-blue-300 w-[37rem] text-justify">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AboutUs;
