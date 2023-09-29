import Navbar from "@/components/navbar/navbar";
import Banner from "@/components/banner/banner";
import About from "@/components/about/about";
import Opportunities from "@/components/opportunities/opportunities";
import Tech from "@/components/technologies/tech";
import Team from "@/components/team/team";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Opportunities />
      <Tech />
      <Team />
    </>
  );
}
