import ActualFooter from "./components/ActualFooter";
import Donate from "./components/Donate/Donate";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyCarousel from "./components/MyCarousel";
import NavBar from "./components/NavBar";
import Programs from "./components/Programs";
import Stats from "./components/Stats";
// import ClientHeader from './components/ClientHeader';
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="text-sm max-w-[1440px] mx-auto">
      {/* <ClientHeader/> */}
      <NavBar />
      <Header />
      <MyCarousel />
      <Stats />
      <Programs />
      <Donate />

      <Footer />
      <Banner/>
      <ActualFooter />
    </div>
  );
}
