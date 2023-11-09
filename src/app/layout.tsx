import type { Metadata } from "next";
import { Poppins, Dancing_Script } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const sspro = Poppins({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});
export const dancingScript = Dancing_Script({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DentalScape",
    description: "Where we make Smiles into Masterpiece",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="snap-y snap-proximity">
            <body className={`${sspro.className}`}>
                <header>
                    <Header></Header>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
