import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeaderMain from "./Components/HeaderMain";
import OurVision from "./Components/OurVision";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import AboutUs from "./Pages/AboutUs";
import HSEPage from "./Pages/hsePage";
import CodeofBusiness from "./Pages/CodeofBusiness";
import EthicalStandards from "./Pages/EthicalStandards";
import ViolationsOfEthicalStandards from "./Pages/ViolationsOfEthicalStandards";
import CSRPage from "./Pages/CSRPage";
import HumanAssets from "./Pages/HumanAssets";
import BoardOfDirectors from "./Pages/BoardOfDirectors";
import ManagementTeam from "./Pages/ManagementTeam";
import OurPeople from "./Pages/OurPeople";
import OperationsPage from "./Pages/OperationsPage";
import OML34 from "./Pages/OML34";
import OilAndGasAssets from "./Pages/OilAndGasAssets";
import NonOilAndGasAssets from "./Pages/NonOilAndGasAssets";
import Production from "./Pages/Production";
import CareersPage from "./Pages/CareersPage";
import ContactPage from "./Pages/ContactPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ESGPage from "./Pages/ESGPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App bg-[#FCF8F8]">
        <Navbar />

        <ScrollToTop>
          <Switch>
            <Route path={"/"} exact>
              <Home />
            </Route>
            <Route path={"/about"} exact>
              <AboutUs />
            </Route>
            <Route path={"/about/HSE"} exact>
              <HSEPage />
            </Route>
            <Route path={"/about/ESG"} exact>
              <ESGPage />
            </Route>
            <Route path={"/about/code_of_business_conduct"} exact>
              <CodeofBusiness />
            </Route>
            <Route
              path={"/about/code_of_business_conduct/ethical_standards"}
              exact
            >
              <EthicalStandards />
            </Route>
            <Route
              path={
                "/about/code_of_business_conduct/violations_of_ethical_standards"
              }
              exact
            >
              <ViolationsOfEthicalStandards />
            </Route>
            <Route path={"/about/csr"} exact>
              <CSRPage />
            </Route>
            <Route path={"/about/human_assets"} exact>
              <HumanAssets />
            </Route>
            <Route path={"/about/human_assets/board_of_directors"} exact>
              <BoardOfDirectors />
            </Route>
            <Route path={"/about/human_assets/management_team"} exact>
              <ManagementTeam />
            </Route>
            <Route path={"/about/human_assets/our_people"} exact>
              <OurPeople />
            </Route>
            <Route path={"/operations"} exact>
              <OperationsPage />
            </Route>
            <Route path={"/operations/our_assets"} exact>
              <OML34 />
            </Route>
            <Route path={"/operations/oil_and_gas_assets"} exact>
              <OilAndGasAssets />
            </Route>
            <Route path={"/operations/non_oil_and_gas_assets"} exact>
              <NonOilAndGasAssets />
            </Route>
            <Route path={"/operations/production"} exact>
              <Production />
            </Route>
            <Route path={"/careers"} exact>
              <CareersPage />
            </Route>
            <Route path={"/contact"} exact>
              <ContactPage />
            </Route>
            <Route path={"/privacy_policy"} exact>
              <PrivacyPolicy />
            </Route>
          </Switch>
        </ScrollToTop>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
