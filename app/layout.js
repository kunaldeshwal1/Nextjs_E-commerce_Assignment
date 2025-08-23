import "./globals.css";
import { CartProvider } from "../context/CartContext";
import localFont from "next/font/local";

const bree = localFont({
  src: [
    {
      path: "../public/fonts/BreeSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-bree",
});
export const metadata = {
  title: "E-Commerce App",
  description: "E-commerce application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bree.className} antialiased  flex justify-center`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
