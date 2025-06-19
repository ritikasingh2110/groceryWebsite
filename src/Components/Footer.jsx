import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#335765] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Grocery Store</h2>
          <p className="text-sm text-[#DBE2DC]">
            Fresh produce delivered straight to your doorstep. 
            Quality and service you can trust.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#B6D9E0]">Home</Link></li>
            <li><Link to="/cart" className="hover:text-[#B6D9E0]">Cart</Link></li>
            <li><a href="#" className="hover:text-[#B6D9E0]">Offers</a></li>
            <li><a href="#" className="hover:text-[#B6D9E0]">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>Email: support@grocerystore.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Mon - Sat: 8AM - 8PM</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">Get exclusive deals and updates</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-lg text-[#335765] outline-none"
            />
            <button className="bg-[#74A8A4] hover:bg-[#B6D9E0] text-[#335765] font-semibold px-4 py-2 rounded-lg transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[#74A8A4] mt-10 pt-6 text-center text-sm text-[#DBE2DC]">
  &copy; {new Date().getFullYear()} Grocery Store. All rights reserved. <br />
</div>
    </footer>
  );
};

export default Footer;
