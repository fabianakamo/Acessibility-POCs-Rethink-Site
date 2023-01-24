import FloatingWpp from "@/components/floatingWpp";
import Footer from "@/components/footer";
import Nav from "@/components/header";
import MailForm from "@/components/mailForm";
import TitleContent from "@/components/titleContent";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
      <TitleContent />
      <MailForm />
      <Footer />
      <FloatingWpp />
    </>
  );
}
