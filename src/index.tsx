import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import DashboardHome from "pages/dashboard/home";
import P2pPage from "pages/dashboard/p2p";
import CreateAd from "pages/dashboard/p2p/pages/create-ad";
import BuyDetails from "pages/dashboard/p2p/pages/details/buy";
import SellDetails from "pages/dashboard/p2p/pages/details/sell";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={() => true}>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardHome />} />

          {/* //p2p routes */}
          <Route path="/p2p" element={<P2pPage />} />
          <Route path="/p2p/create-ad" element={<CreateAd />} />
          <Route path="/p2p/buy/details" element={<BuyDetails />} />
          <Route path="/p2p/sell/details" element={<SellDetails />} />
        </Routes>
      </Router>
    </StyleSheetManager>
  </React.StrictMode>
);
