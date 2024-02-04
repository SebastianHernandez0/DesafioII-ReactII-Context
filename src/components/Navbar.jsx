import { Link } from "react-router-dom";
import Gallery from "./Gallery";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
      </nav>
      
    </div>



  );
};
export default Navbar;
