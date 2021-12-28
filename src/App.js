
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HargaSpesial from "./component/HargaSpesial";
import Header from "./component/Header";
import Kategori from "./component/Kategori";
import SlideGambar from "./component/SlideGambar";
import KumpulanRekomendasi from "./component/KumpulanRekomendasi";
import DagingSegar from "./component/DagingSegar";
import InformasiProduk from "./component/InformasiProduk";
import Footer from "./component/Footer";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <SlideGambar />
          <Kategori/>
          <HargaSpesial/>
          <KumpulanRekomendasi/>
          <DagingSegar/>
          <InformasiProduk/>
          <Footer/>
        </Route>
      </Switch>
    </Router>

  )
}



export default App;
