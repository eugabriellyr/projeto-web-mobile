import { Poppins, Source_Serif_4 } from "next/font/google";
import "./global.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-source-serif",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={`${poppins.variable} ${sourceSerif.variable}`}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}