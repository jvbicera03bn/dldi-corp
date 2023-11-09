import Image from "next/image";
interface services {
    title: string;
    logo: string;
}
function Services() {
    const services: Array<services> = [
        {
            title: "Dental X-rays",
            logo: "/ServicesPhoto/dental-x-ray.svg",
        },
        {
            title: "Deep Cleaning",
            logo: "/ServicesPhoto/tooth-cleaning.svg",
        },
        {
            title: "Crowns",
            logo: "/ServicesPhoto/dental-crown.svg",
        },
        {
            title: "Root Canal",
            logo: "/ServicesPhoto/root-canal.svg",
        },
        {
            title: "Dentures",
            logo: "/ServicesPhoto/denture.svg",
        },
        {
            title: "Tooth Removal",
            logo: "/ServicesPhoto/tooth-extraction.svg",
        },
        {
            title: "Braces",
            logo: "/ServicesPhoto/dental-brace.svg",
        },
        {
            title: "Dental Sealants",
            logo: "/ServicesPhoto/dental-brace.svg",
        },
        {
            title: "Teeth Whitening",
            logo: "/ServicesPhoto/dental-brace.svg",
        },
        {
            title: "Dental Filler",
            logo: "/ServicesPhoto/dental-brace.svg",
        },
    ];
    return (
        <div
            className={`flex snap-center scroll-mt-[4.4375rem] flex-col items-center bg-blue-800 py-10`}
        >
            <h1 className="text-center text-3xl font-bold text-blue-50">
                OUR SERVICES
            </h1>
            <p className="w-1/2 pb-10 pt-2 text-center text-white">
                {`At DentalScape, we are committed to providing top-notch dental
                care. We take pride in our dedication to exceptional service and
                the well-being of our patients. Our skilled team of
                professionals ensures a comfortable and family-friendly
                atmosphere, while our state-of-the-art equipment ensures the
                highest quality of care. Your dental health and satisfaction are
                our priorities. Welcome to a healthier, happier smile at DentalScape`}
            </p>
            <div className="flex flex-wrap justify-center gap-10 px-48">
                {services.map((item, key) => {
                    return (
                        <div
                            key={key}
                            className="flex w-[200px] flex-col items-center rounded-lg border-2 border-white py-5"
                        >
                            <Image
                                className="logos"
                                width={100}
                                height={125}
                                alt={item.title}
                                src={item.logo}
                            />
                            <h1 className="text-center font-medium text-white">
                                {item.title}
                            </h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Services;
