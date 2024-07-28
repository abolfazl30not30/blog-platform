import { Inter } from "next/font/google";
import "../style/globals.css";

const IranSans = localFont({
  src: [
    {
      path: '../fonts/IRANSans(FaNum)_Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/IRANSans(FaNum).ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/IRANSans(FaNum)_Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/IRANSans(FaNum)_Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata = {
  title: "Blog App",
  description: "Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" className={IranSans.className}>
      <body>{children}</body>
    </html>
  );
}
