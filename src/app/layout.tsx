import type { Metadata } from "next";
import "./globals.css";

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
      </body>
    </html>
  );
}
