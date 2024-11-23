import "../globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Antic+Didone&display=swap" rel="stylesheet"/>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </head>
    <body>
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
