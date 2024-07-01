import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import Promo from "./pages/Promo";
import Delivery from "./pages/Delivery";
import Cart from "./Components/Cart/Cart";
import LoaderPage from "./Components/Loader/LoaderPage";
import Modal from "./Components/Modal/Modal";
import Content from "./Components/Modal/Content";


const App = () => {
  const [active, setActive] = useState(true);
  const [stateLoader, setStateLoader] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => setStateLoader(false), 3000);
    return () => clearTimeout(loaderTimer)
  }, [])

  useEffect(() => {
    const modalTimer = setTimeout(() => setModalIsOpen(true), 10000);
    return () => clearTimeout(modalTimer)
  }, [])

  return <Router>
  <div>
    { stateLoader &&
      <LoaderPage />
    }
  </div>
  <div>
    {modalIsOpen && 
    <Modal setModalIsOpen={setModalIsOpen}>
      <Content setModalIsOpen={setModalIsOpen} />
    </Modal>
    }
  </div>
  <ScrollToTop />
  <Navbar active={active} setActive={setActive} />
  <div className={active ? 'cart close': 'cart open'} >
      <Cart active={active} setActive={setActive} />
      </div>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/promo" element={<Promo/>} />
    <Route path="/delivery" element={<Delivery/>} />
  </Routes>
</Router>
}

export default App;
