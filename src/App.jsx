import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/Hero";
import TaskBoard from "./Components/TaskBoard";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}
