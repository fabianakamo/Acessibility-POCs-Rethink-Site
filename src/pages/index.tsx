import FloatingWpp from "../components/floatingWpp/index";
import Footer from "../components/footer";
import Nav from "../components/header";
import MailForm from "../components/mailForm";
import RetractableMenu from "../components/retractableMenu";
import TitleContent from "../components/titleContent";
import { Inter } from "@next/font/google";
import ThemeProvider from "../providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <Nav />
        <RetractableMenu />
        <TitleContent />
        <MailForm />
        <Footer />
        <FloatingWpp />
      </ThemeProvider>
    </>
  );
}
