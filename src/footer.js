import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import './foot.css'

export default function Footer() {
  return (
  <>
    <div class="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-muted">&copy; 2023 Designed by Henry3000</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><button class="text-muted" href="#"><FaFacebookF/></button></li>
            <li className="ms-3"><button class="text-muted" href="#"><FaInstagram/></button></li>
            <li className="ms-3"><button class="text-muted" href=""><FaTwitter/></button></li>
            </ul>
        </footer>
    </div>
  </>
  );
}