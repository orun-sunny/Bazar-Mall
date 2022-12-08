//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar';
import Carosel from './Components/Carousel/Carosel';
import TopBanner from './Components/TopBanner/TopBanner';
import FlashSale from './Components/FlashSale/FlashSale';
import BarazMall from './Components/BarazMall/BarazMall';
import Products from './Components/Products/Products';
import flashsaleData from './Components/Data/FlashData';

function App() {
  console.log(flashsaleData);
  return (
    <div className="App">
    <Navbar></Navbar>
    <LogoSearchBar/>
    <Carosel></Carosel>
    <TopBanner></TopBanner>
    <Products products={flashsaleData}></Products>
    <Products></Products>
    
    {/* <FlashSale></FlashSale>
    <BarazMall></BarazMall> */}
    </div>
  );
}

export default App;
