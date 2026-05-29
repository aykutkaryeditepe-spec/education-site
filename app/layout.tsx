import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "İstasyon Akademi",
  description: "Belgrad ve Avrupa Üniversite Danışmanlığı",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
