
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HargaSpesial from "./HargaSpesial";
import Header from "./Header";
import Kategori from "./Kategori";
import SlideGambar from "./SlideGambar";
import KumpulanRekomendasi from "./KumpulanRekomendasi";
import DagingSegar from "./DagingSegar";
import InformasiProduk from "./InformasiProduk";
import Footer from "./Footer";
import MobileHeader from "./MobileHeader";

import useMediaQuery from '@mui/material/useMediaQuery';
import createTheme from '@mui/material/styles/createTheme';




export default function Home() {
  const theme = createTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div>
      <Router>
        <Switch>
          <Route>
            <Header />
            <SlideGambar />
            <Kategori />
            <HargaSpesial />
            <KumpulanRekomendasi />
            <DagingSegar />
            {isDesktop ?
              <InformasiProduk />
              :
              <></>
            }
            {isDesktop ?
              <Footer />
              :
              <></>
            }
            {isDesktop ?
              <></>
              :
              <MobileHeader />
            }

          </Route>
        </Switch>
      </Router>
    </div>
  )
}



