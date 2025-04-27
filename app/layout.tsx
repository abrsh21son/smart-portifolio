import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Cursor from "@/components/Cursor";


export const metadata: Metadata = {
  title: "AbrshDev",
  description: "Software Engineer and web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0B1120] text-stone-100 lg:ml-8 relative min-h-screen">
        {/* Client-side component for cursor */}
        <Cursor />
        
        <div className="container mx-auto px-4 md:px-6">
          <Header />
          <main className="py-4  ">
            {children}
          </main>
                
          
        </div>
      </body>
    </html>
  );
}