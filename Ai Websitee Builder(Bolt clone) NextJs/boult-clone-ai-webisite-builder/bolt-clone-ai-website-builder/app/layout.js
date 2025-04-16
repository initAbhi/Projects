import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Header from "@/components/Header";
import { Pacifico } from "next/font/google";
import ConvexClientProvider from "./ConvexClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--pacifico",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/space.jpg')] bg-cover bg-center bg-no-repeat `}
      >
        <div className="absolute inset-0 bg-black/85 h-full"></div>
        {/* Light coming from the top */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent mix-blend-lighten"></div>
  <ConvexClientProvider>

        <Provider>
        <div className="relative z-10 text-white text-center ">

        <Header />
        {children}
        </div>
        </Provider>
        
  </ConvexClientProvider>
      </body>
    </html>
  );
}
