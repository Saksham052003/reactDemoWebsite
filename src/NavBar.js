import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg text-white bg-dark">
      <span className="navbar-brand text-success">NavBar</span>
      <h1>My Demo website navbar</h1>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <button className="nav-link text-white" onClick={() => console.log("Home")}>
              Home
            </button>
          </li>
          <li className="nac-item">
            <button className="nav-link text-white" onClick={() => console.log("About Us")}>
              About Us
            </button>
          </li>
          <li className="nav-item dropdown">
            <button className="nav-link text-white" onClick={() => console.log("Products")}>
              Products
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link disabled" onClick={() => console.log("Meeting")}>
              Meeting
            </button>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;