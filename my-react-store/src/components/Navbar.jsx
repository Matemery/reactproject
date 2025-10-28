import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconShoppingCart } from '@tabler/icons-react';
import GlobalContext from "../state/globalContext";

function Navbar() {
    const user= useContext(GlobalContext).user
     const cart = useContext(GlobalContext).cart

    function getTotalItems() {
        let total = 0

        for(let i=0; i<cart.length; i++){
            total += cart[i].quantity
        }

        return total
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <h1>Wrenching/Tools</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/catalog"} className="nav-link">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin page
              </Link>
            </li>
            <li className="nav-item">
            
            </li>
          </ul>
          <span className="text-white">{user.name}</span>

          <Link className='btn btn-outline-light' to={'/cart'}>
                            <IconShoppingCart />
                            {getTotalItems()}
          </Link>
          {/* <pre className='text-white'>{JSON.stringify(user)}</pre> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;