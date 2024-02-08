import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg " style={{backgroundColor:"aquamarine"}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="https://cdn-icons-png.flaticon.com/512/2798/2798097.png" height="30" width="30"/>
           
          </a>
          Your Travel Buddy
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Add Plan 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/view">
                  View Travel Data
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/view">
                  search Data
                </a>
              </li>
             
             
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
    </div>
  );
};

export default NavBar;
