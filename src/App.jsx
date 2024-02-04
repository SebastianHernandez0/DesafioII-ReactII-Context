import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import Api from "./components/Api";


const App = () => {
  return (
    <div>
      <Navbar />
      <Api>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
      </Api>
      
    </div>
  );
};
export default App;
