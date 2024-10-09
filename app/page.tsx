// import ActualFooter from "./components/ActualFooter";
// import Donate from "./components/Donate/Donate";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MyCarousel from "./components/MyCarousel";
// import NavBar from "./components/NavBar";
// import Programs from "./components/Programs";
// import Stats from "./components/Stats";
// import ClientHeader from './components/ClientHeader';
// import Banner from "./components/Banner";
// import NewLanding from "./components/NewLanding";

export default function Home() {
  return (
    <div className="text-sm ">
      {/* <ClientHeader/> */}
      {/* <NewLanding/> */}
      {/* <NavBar /> */}
      {/* <Header /> */}
      {/* <MyCarousel /> */}
      {/* <Stats /> */}
      {/* <Programs /> */}
      {/* <Donate /> */}
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white overflow-hidden">
      
      {/* Animated Background Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400 opacity-30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-400 opacity-30 rounded-full blur-2xl animate-ping"></div>

      {/* Rotating Gradient Ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] h-[400px] bg-gradient-to-tr from-blue-400 via-green-400 to-yellow-300 rounded-full animate-spin-slow"></div>
      </div>

      {/* Coming Soon Text */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg animate-fade-in-up">
          Coming Soon
        </h1>
        <p className="text-lg md:text-2xl mt-4 animate-fade-in-up animation-delay-2">
          We are working hard to bring something amazing!
        </p>

        {/* Countdown Timer */}
        <div className="mt-10 flex space-x-4 justify-center animate-fade-in-up animation-delay-4">
          <div className="p-4 bg-white text-black rounded-lg shadow-lg text-center">
            <p className="text-3xl font-bold">00</p>
            <p className="text-sm">Days</p>
          </div>
          <div className="p-4 bg-white text-black rounded-lg shadow-lg text-center">
            <p className="text-3xl font-bold">00</p>
            <p className="text-sm">Hours</p>
          </div>
          <div className="p-4 bg-white text-black rounded-lg shadow-lg text-center">
            <p className="text-3xl font-bold">00</p>
            <p className="text-sm">Minutes</p>
          </div>
          <div className="p-4 bg-white text-black rounded-lg shadow-lg text-center">
            <p className="text-3xl font-bold">00</p>
            <p className="text-sm">Seconds</p>
          </div>
        </div>
      </div>

      {/* Floating Animation for Extra Flair */}
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-purple-500 opacity-70 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-pink-600 opacity-80 rounded-full blur-xl animate-bounce animation-delay-3"></div>
    </div>
      {/* <Footer /> */}
      {/* <Banner/> */}
      {/* <ActualFooter /> */}
    </div>
  );
}
