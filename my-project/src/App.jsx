import Hero from "./components/Hero";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";
import FAQ from "./components/FAQ/FAQ";

const App = () => {
  return <main className="overflow-x-hidden">
      
      <Hero />
      <Products />
      <Banner />
      <BannerText />
      <Blogs />
      <FAQ />
    </main>
};

export default App;