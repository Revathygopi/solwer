import type { Metadata } from "next";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./globals.css";



const gilroy = localFont({
  src: [
    {
      path: './fonts/Gilroy-ExtraBold.otf',
      weight: '800',
    },
    {
      path: './fonts/Gilroy-light.otf',
      weight: '300',
    },
  ],
  variable: "--font-gilroy",
});


export const metadata: Metadata = {
  title: "SOLWER",
  description: "Solwer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${gilroy.variable} font-gilroy`}>
        {children}
      </body>
    </html>
  );
}
