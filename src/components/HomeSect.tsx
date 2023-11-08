"use client";
import { Tinos } from "next/font/google";
import Image from "next/image";

const tinos = Tinos({
    subsets: ["latin"],
    weight: ["400", "700"],
});
function HomeSect() {
    return (
        <div className="flex h-[100vh] shrink-0 snap-start bg-home-photo-2 bg-cover">
            <div className="w-1/2"></div>
            <div className="h-full w-1/2 bg-blue-200/20 content-center">
                <div
                    className={`mt-96 ml-24 gap-1 text-white font-semibold flex items-center ${tinos.className}`}
                >
                    <Image
                        src={`/logo1.1.png`}
                        alt="Logo1.1"
                        width={`100`}
                        height={`1`}
                    />
                    <div>
                        <h1 className="text-7xl">DENTALSCAPE</h1>
                        <h2 className="text-3xl">
                            YOUR SMILE, OUR MASTERPIECE
                        </h2>
                    </div>
                </div>
                <button className="shadow-l ml-52 mt-3 rounded bg-blue-900 px-4 py-1 text-2xl text-white transition-all hover:scale-105 active:scale-100">
                    Schedule Appointment
                </button>
            </div>
        </div>
    );
}

export default HomeSect;
