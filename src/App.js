//importing pages hare
import { Route, Routes } from 'react-router-dom';
import "./app.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFoundPage/NotFound";
import ShopPage from './pages/ShopPage/ShopPage';
import SinglePage from "./pages/SinglePage/SinglePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<SinglePage />} />
        
        <Route path="/shop/:name" element={<ShopPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
