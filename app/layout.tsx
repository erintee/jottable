import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DataProvider } from "@/app/context/DataContext";
import QuickNote from "@/app/features/notes/components/QuickNote";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jottable",
  description: "A multiuse note-taking app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <DataProvider>
      <html lang="en">
        <body className={inter.className}>
          <nav className="pl-8 pr-8 flex justify-between">
              <h1>Jottable</h1>
              <QuickNote/>
          </nav>        
          {children}
        </body>
      </html>
    </DataProvider>
  );
}
