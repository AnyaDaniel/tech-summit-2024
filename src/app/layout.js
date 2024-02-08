import Header from "@/components/navigation/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/navigation/Footer";
import Socials from "@/components/navigation/Socials";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  weight: ["300", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sask Black Business",
  description:
    "  Join us as we make waves towards empowering the community through promoting black businesses.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Header />
        <div className="overflow-hidden max-w-[1920px] mx-auto  w-full">
          {children}
        </div>
        {/* <Socials /> */}
        <Footer />

        <ToastContainer />
      </body>
    </html>
  );
}
