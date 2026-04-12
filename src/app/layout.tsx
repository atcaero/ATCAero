import ScrollPlane from "../components/ScrollPlane";
import "./globals.css";
import { Inter, Montserrat, Playfair_Display, Cormorant, Monda, Arimo } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-cormorant",
});

const monda = Monda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-monda",
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arimo",
});

export const metadata = {
  title: "Aviations Trainings Center",
  description: "Aviation Academy Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable}
        ${montserrat.variable}
        ${monda.variable}
        ${arimo.variable}
        ${playfair.variable}
        ${cormorant.variable}
      `}
    >
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
       <ScrollPlane />

      <body>{children}</body>
    </html>
  );
}
