import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Projeto Porto Conserta",
  description: "Projeto final do Challenge da FIAP com a Porto Seguro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="h-screen bg-main-bg overflow-x-hidden">
        {children}
        <Footer />
      </body>
    </html>
  );
}
