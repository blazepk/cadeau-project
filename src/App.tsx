import Testimony from "./components/Testimony/Testimony";
import SectionOne from "./components/content/SectionOne";
import SectionTwo from "./components/content/SectionTwo";
import AutoScrolling from "./components/AutoScrolling/AutoScrolling";
// import Footer from "./components/footer/Footer";
// import NavComponent from "./components/navbar/FlowbiteNav";
import SimpleSlider from "./components/swiper/MainSwiper1";

function App() {
  return (
    <div className="bg-brown-300 font-custom  tracking-widest">
      <div className="relative mt-0">
        <h2 className="relative inset-1 text-3xl text-center py-4 text-brown-900">
        "Thoughtful Gestures for Business Relationships"
        </h2>
        <SimpleSlider />
      </div>
      <SectionOne />
      <SectionTwo />
      <Testimony />
      <AutoScrolling />
    </div>
  );
}

export default App;
