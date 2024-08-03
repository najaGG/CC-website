import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../image/logo.png'; // ตรวจสอบว่าเส้นทางถูกต้อง
import menuIcon from '../image/D.png'; // ตรวจสอบว่าเส้นทางถูกต้อง

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="dropdown ms-3">
            <button
              className="btn"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              <img src={menuIcon} alt="Menu Icon" width="90%" height="90%" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item text-center" style={{ fontSize: '36px' }} href="#">ACTIVITY & INFORMATION</a></li>
              <li><a className="dropdown-item text-center" style={{ fontSize: '36px' }} href="#">VISION</a></li>
              <li><a className="dropdown-item text-center" style={{ fontSize: '36px' }} href="#">APPLYING</a></li>
              <li><a className="dropdown-item text-center" style={{ fontSize: '36px' }} href="#">ACCOMPLISHMENT</a></li>
              <li><a className="dropdown-item text-center" style={{ fontSize: '36px' }} href="#">CONTACT</a></li>
            </ul>
          </div>
          <div className="navbar-brand mx-auto">
            <img src={logo} alt="Logo" width="70%" height="70%" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
