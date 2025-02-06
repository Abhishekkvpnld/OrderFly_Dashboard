import { Geist, Geist_Mono } from "next/font/google";
import AdminSidebar from "./components/adminNavbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard",
  description: "next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex `}
      >
        <AdminSidebar/>
        {children}
      </body>
    </html>
  );
}
