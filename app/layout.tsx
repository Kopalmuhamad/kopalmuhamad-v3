import type { Metadata } from "next";
import "./globals.css";
import NavbarView from "@/components/views/navbar-view";
import Footer from "@/components/views/footer-view";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Kopalmuhamad V3",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Toaster />
        <NavbarView />
        {children}
        <Footer />
      </body>
    </html>
  );
}
