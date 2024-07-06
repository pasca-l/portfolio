import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white">
        <Header accountName="pasca-l" repositoryName="portfolio" />
        <div className="mt-6 w-screen grow self-center px-8">
          <Title title="Portfolio" description="updated on 6 Jul 2024" />
          <div className="flex gap-x-6">
            <div className="grow">
              <Content />
              <Content />
            </div>
            <Sidebar />
          </div>
        </div>
        <Footer accountName="pasca-l" authorName="Shion Yamadate" />
      </div>
    </>
  );
}
