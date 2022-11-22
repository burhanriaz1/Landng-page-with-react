import Blog from "./Components/Blog";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Title from "./Components/Title";

export default function App() {
  let url="123";
  return (
    <>
    <div>
    <Navbar url={url}/>
    <Hero/>
    <Title url={url}/>
    <Blog/>
    <Pricing/>
    <Cta/>
    <Footer/>
    </div>
    </>
  )
}