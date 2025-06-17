import { FaInstagram } from "react-icons/fa";
import { CiYoutube, CiTwitter, CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#242424] text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
        <div>
          <h2 className="text-xl font-bold">QuickBite</h2>
          <p className="text-sm">Delivering Happiness, One Bite at a Time</p>
          <p className="text-xs mt-2">
            QuickBite brings your favorite meals from top restaurants right to
            your doorstep. Fast, hot, and delicious every time.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-2">COMPANY</p>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">POLICIES</p>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Security</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">SUPPORT</p>
          <ul className="space-y-1 text-sm">
            <li>Help Center</li>
            <li>Track Order</li>
            <li>Cancellation</li>
            <li>Contact Support</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">HEAD OFFICE</p>
          <ul className="space-y-1 text-sm">
            <li>QuickBite Foods Pvt. Ltd.</li>
            <li>Plot 23, Food Tech Park, Bengaluru</li>
            <li>Karnataka, India</li>
            <li>560001</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <CiFacebook size={25} />
            <CiTwitter size={25} />
            <CiYoutube size={25} />
            <FaInstagram size={22} />
          </div>
        </div>
      </footer>
      <div className="bg-[#242424] p-4 text-white text-center ">
        <p>@ 2025 Bhagheeradhi Jayaram. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
