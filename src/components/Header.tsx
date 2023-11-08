"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
function Header() {
    const headerOptions: Array<string> = [
        "Home",
        "About",
        "Services",
        "Branches",
        "Contact",
    ];
    const [selected, setSelected] = useState("Home");
    const [scrolled, setScrolled] = useState(false);
    function scrollTracker() {
        if (window.scrollY < 10) {
            setScrolled(false);
        } else if (window.scrollY >= 10) {
            setScrolled(true);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollTracker);
        return () => {
            window.removeEventListener("scroll", scrollTracker);
        };
    }, []);
    return (
        <div
            className={`flex justify-evenly fixed top-0 w-full items-center transition-all ${
                scrolled ? "bg-blue-500 shadow-lg" : "bg-transparent"
            }`}
        >
            <Image
                className="hover:cursor-pointer"
                src="/logo2.png"
                width={200}
                height={80}
                alt="logo"
            />
            <ul className="flex items-center">
                {headerOptions.map((options, key) => {
                    return (
                        <li
                            key={key}
                            className={`cstm-header transition-all font-medium text-2xl hover:cursor-pointer px-5 py-[1.21rem] ${
                                scrolled
                                    ? options === selected
                                        ? "text-blue-800"
                                        : "bg-transparent text-neutral-50"
                                    : "bg-transparent text-white"
                            } `}
                            onClick={() => {
                                setSelected(options);
                            }}
                        >
                            {options}
                        </li>
                    );
                })}
            </ul>
            <button
                className={`text-xl shadow-l hover:scale-105 transition-all text-white bg-blue-900 rounded px-3 h-9 active:scale-100 opacity-0 ${
                    scrolled && "opacity-100"
                }`}
            >
                Book Now
            </button>
        </div>
    );
}

export default Header;
