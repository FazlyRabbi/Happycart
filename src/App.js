//importing pages hare
import { Route, Routes } from "react-router-dom";
import "./app.css";
import CustomerPrivacyNotic from "./pages/CustomerServicesAndHelp/CustomerPrivacyNotic";
import CustomerServicesAndHelp from "./pages/CustomerServicesAndHelp/CustomerServicesAndHelp";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFoundPage/NotFound";
import ShopPage from "./pages/ShopPage/ShopPage";
import SinglePage from "./pages/SinglePage/SinglePage";
import Navbar from "./shared/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<SinglePage />} />
        {/* Filter page */}
        <Route path="shop" element={<ShopPage />}>
          <Route path=":name" element={<ShopPage />} />
        </Route>
        <Route path="customer">
          <Route index  element={<CustomerServicesAndHelp/>}/>
          <Route path="services" element={<CustomerServicesAndHelp />} />
          <Route path="privacy" element={<CustomerPrivacyNotic />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
