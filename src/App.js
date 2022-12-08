//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar';
import Carosel from './Components/Carousel/Carosel';
import TopBanner from './Components/TopBanner/TopBanner';
import FlashSale from './Components/FlashSale/FlashSale';
import BarazMall from './Components/BarazMall/BarazMall';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <LogoSearchBar/>
    <Carosel></Carosel>
    <TopBanner></TopBanner>
    <FlashSale></FlashSale>
    <BarazMall></BarazMall>
    </div>
  );
}

export default App;
