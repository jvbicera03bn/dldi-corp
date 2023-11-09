"use client";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import AnimateHeight from "react-animate-height";
import { useState } from "react";

interface branchList {
    title: string;
    location: string;
    facebook: string;
    contactNum: string;
    img: string;
}
function Branches() {
    const [seeMoreState, setSeeMoreState] = useState(false);
    const branchList: Array<branchList> = [
        {
            title: "Santa Rosa Laguna",
            location:
                "Precious Building Manila S Rd. Brgy. Dila, Balibago Sta. Rosa",
            facebook: "https://www.facebook.com/dentalscapestarosa",
            contactNum: "09123456789",
            img: "/BranchesPhoto/SantaRosaLaguna.png",
        },
        {
            title: "Santa Rosa Laguna",
            location:
                "Precious Building Manila S Rd. Brgy. Dila, Balibago Sta. Rosa",
            facebook: "https://www.facebook.com/dentalscapestarosa",
            contactNum: "09123456789",
            img: "/BranchesPhoto/SantaRosaLaguna.png",
        },
        {
            title: "Santa Rosa Laguna",
            location:
                "Precious Building Manila S Rd. Brgy. Dila, Balibago Sta. Rosa",
            facebook: "https://www.facebook.com/dentalscapestarosa",
            contactNum: "09123456789",
            img: "/BranchesPhoto/SantaRosaLaguna.png",
        },
        {
            title: "Santa Rosa Laguna",
            location:
                "Precious Building Manila S Rd. Brgy. Dila, Balibago Sta. Rosa",
            facebook: "https://www.facebook.com/dentalscapestarosa",
            contactNum: "09123456789",
            img: "/BranchesPhoto/SantaRosaLaguna.png",
        },
        {
            title: "Santa Rosa Laguna",
            location:
                "Precious Building Manila S Rd. Brgy. Dila, Balibago Sta. Rosa",
            facebook: "https://www.facebook.com/dentalscapestarosa",
            contactNum: "09123456789",
            img: "/BranchesPhoto/SantaRosaLaguna.png",
        },
        {
            title: "Santa Rosa Laguna",
            location:
                "Precious Building Manila S Rd. Brgy. Dila, Balibago Sta. Rosa",
            facebook: "https://www.facebook.com/dentalscapestarosa",
            contactNum: "09123456789",
            img: "/BranchesPhoto/SantaRosaLaguna.png",
        },
    ];
    return (
        <div
            className={`flex snap-end scroll-mt-[4.4375rem] flex-col items-center bg-white py-10`}
        >
            <h1 className="text-center text-3xl font-bold text-blue-900">
                Branches
            </h1>
            <AnimateHeight height={!seeMoreState ? 425 : `auto`} duration={400}>
                <div
                    className={`border-1 flex flex-row flex-wrap justify-center gap-5 overflow-hidden px-48 py-5`}
                >
                    {branchList.map((item, key) => {
                        return (
                            <div
                                key={key}
                                className="rounded bg-blue-500 shadow-branches"
                            >
                                <Image
                                    className="rounded"
                                    width={300}
                                    height={0}
                                    alt={item.title}
                                    src={item.img}
                                />
                                <div className="flex w-[250px] flex-col items-start gap-2 px-5 py-2 text-white">
                                    <h1 className="flex text-lg">
                                        {item.title}
                                    </h1>
                                    <h3 className="text-md flex items-center gap-4">
                                        <BsTelephone size="20" />
                                        {item.contactNum}
                                    </h3>
                                    <h3 className="text-md flex items-center gap-3">
                                        <FiFacebook size="25" />
                                        {item.title}
                                    </h3>
                                    <h3 className="flex items-start gap-3 text-justify text-sm">
                                        <IoLocationOutline size="60" />
                                        {item.location}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </AnimateHeight>
            <button
                onClick={() => {
                    setSeeMoreState((prevState) => {
                        return !prevState;
                    });
                }}
                className={`shadow-l mt-5 h-9 w-fit rounded-full bg-blue-900 px-2 text-xl text-white transition-all hover:scale-105 active:scale-100`}
            >
                <AiOutlineDown />
            </button>
        </div>
    );
}

export default Branches;
