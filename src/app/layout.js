import { Geist, Geist_Mono } from "next/font/google";
import AdminSidebar from "./components/adminNavbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
          <AdminSidebar />
          <main className="flex-1">{children}</main>
          <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
