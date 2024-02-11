import SectionOne from "./components/content/SectionOne";
import SectionTwo from "./components/content/SectionTwo";
import Footer from "./components/footer/Footer";
import NavComponent from "./components/navbar/FlowbiteNav";
import SwiperComponent from "./components/swiper/MainSwiper";

function App() {
  return (
    <div className="bg-yellow-100 font-custom tracking-widest">
      <NavComponent />
      <div className="relative">
        <h2 className="absolute inset-0 text-3xl text-yellow-600">
          Select perfect gift for you
        </h2>
        <SwiperComponent />
      </div>
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default App;
