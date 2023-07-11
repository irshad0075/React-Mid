
import React from "react";
import "../styles/Footer.scss";
import { FaTwitter, FaFacebook, FaLinkedin, FaPinterest, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Smart Phones</span>
            <span>Laptop</span>
            <span>Fragnance</span>
            <span>SkinCare</span>
            <span>Grocerries</span>
            <span>Home</span>
            <span>Decoration</span>
            <span>Furniture</span>
            <span>Women Shoes</span>
            <span>Jewellery</span>
            <span>Lightning</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Top Sales</span>
            <span>Latest Updates</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Latest Brands</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling online</span>
            <span>Buying online</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Us</h2>
            <span>Online Business</span>
            <span>Latest Sale</span>
            <span>Top Barnds </span>
            <span>Brand Guides</span>
            <span>Get Inspired</span>
            <span>Product Select</span>
            <span>Home Delievery</span>
            <span>Cheap rates</span>
            <span>Facilities</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Online Shoping Site</h2>
            <span>© IRFAH International Ltd. 2023</span>
          </div>
          <div className="right">
  <div className="social">
    <FaTwitter />
    <FaFacebook />
    <FaLinkedin />
    <FaPinterest />
    <FaInstagram />
  </div>
</div>
</div>
</div>
</div>
    
    </>
  );
};

export default Footer;
