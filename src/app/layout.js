import Footer from "@/components/footer";
import "../scss/site.scss";
import Header from "@/components/header";
import localFont from "next/font/local";

const gerstnerProgramm = localFont({
  src: [
    {
      path: "../../public/fonts/Gerstner-ProgrammLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gerstner-ProgrammRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gerstner-ProgrammMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gerstner-ProgrammMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-gerstner",
  display: "swap",
});

export const metadata = {
  title: "Some Rabbit",
  description: "Some Rabbit web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gerstnerProgramm.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
