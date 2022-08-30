//importing pages hare
import { Route, Routes } from "react-router-dom";
import "./app.css";
import BlogPageOne from "./pages/Blogs/BlogPageOne";
import SingleBlog from "./pages/Blogs/SingleBlog";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFoundPage/NotFound";
import AffiliateProgram from "./pages/Others/AffiliateProgram/index";
import CustomerPrivacyNotic from "./pages/Others/CustomerServicesAndHelp/CustomerPrivacyNotic";
import CustomerServicesAndHelp from "./pages/Others/CustomerServicesAndHelp/CustomerServicesAndHelp";
import University from "./pages/Others/university/index";
import Vendor_Register from "./pages/Others/vendor_register/index";
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
          <Route index element={<CustomerServicesAndHelp />} />
          <Route path="services" element={<CustomerServicesAndHelp />} />
          <Route path="privacy" element={<CustomerPrivacyNotic />} />
        </Route>

        
        <Route path="affiliate-program" element={<AffiliateProgram />} />

        <Route path="vendor-register" element={<Vendor_Register />} />
        <Route path="university" element={<University />} />
        <Route path="blog">
          <Route path="journal" element={<BlogPageOne />} />
          <Route path="single/journal/:title" element={<SingleBlog />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
