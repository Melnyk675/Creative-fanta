import Hero from "./components/Hero";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";

const App = () => {
  return <main className="overflow-x-hidden">
      
      <Hero />
      <Products />
      <Banner />
      <BannerText />
      <Blogs />
    </main>
};

export default App;