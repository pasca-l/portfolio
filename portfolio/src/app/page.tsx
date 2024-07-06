import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="grow">Main Content</div>
        <Footer />
      </div>
    </>
  );
}
