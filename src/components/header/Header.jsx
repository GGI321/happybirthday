// import React from 'react'
// import './Header.css'
// import { Link } from 'react-router-dom'


// function Header() {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//          <Link to='/'>Asa m</Link>
//         </li>
//         <li class="nav-item">
//         <Link to='/About'>About us</Link>
//         </li>
       
//       </ul>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default Header
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><span>ACHALUGO M</span></Link>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Asa m</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About us</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Gallery">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
