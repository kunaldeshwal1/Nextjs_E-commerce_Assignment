import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { Bree_Serif } from "next/font/google";

const bree = Bree_Serif({
  weight: "400",
  subsets: ["latin"],
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
