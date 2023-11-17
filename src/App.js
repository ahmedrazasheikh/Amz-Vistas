import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CONTACTus from './Pages/CONTACT-US/CONTACTus';
import About from './Pages/About-us/About';
import Shopify_dropshipping from './Pages/Shopify-Dropshipping/shopify_dropshipping';
import AMAZON_FBA from './Pages/AMAZON_FBA/AMAZON_FBA';
import Amazon_store_creation from './Pages/Amazon_Store_Creation/amazon_store_creation';
import ScrollToTop from './Components/Scrool_Top/Scroll_Top';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <ScrollToTop />
                <Home />
              </>
            }
          />
          <Route
            path={"/Contact-us"}
            element={
              <>
                <ScrollToTop />
                <CONTACTus />
              </>
            }
          />
          <Route
            path={"/about-us"}
            element={
              <>
                <ScrollToTop />
                <About />
              </>
            }
          />
          <Route
            path={"/shopify-dropshipping"}
            element={
              <>
                <ScrollToTop />
                <Shopify_dropshipping />
              </>
            }
          />
          <Route
            path={"/AMAZON-FBA"}
            element={
              <>
                <ScrollToTop />
                <AMAZON_FBA />
              </>
            }
          />
          <Route
            path={"/Services"}
            element={
              <>
                <ScrollToTop />
                <Amazon_store_creation />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
