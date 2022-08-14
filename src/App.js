//importing pages hare
import Home from "./pages/Home/Home";
import { Routes, Route } from 'react-router-dom'
import "./app.css";
import NotFound from "./pages/NotFoundPage/NotFound";
import SinglePage from "./pages/SinglePage/SinglePage";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<SinglePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
