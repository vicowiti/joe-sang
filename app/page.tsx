import Footer from "./components/Footer";
import Header from "./components/Header";
import MyCarousel from "./components/MyCarousel";
import NavBar from "./components/NavBar";
import Programs from "./components/Programs";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <div className="text-sm">
      <NavBar/>
      <Header />
      <MyCarousel />
      <Stats />
      <Programs/>
      <Footer />
    </div>
  );
}
