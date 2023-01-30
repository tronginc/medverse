import "./globals.css";
import Footer from "@/components/CommonUI/Footer";
import Navbar from "@/components/CommonUI/Navbar";
import { Poppins } from "@next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main className={inter.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
