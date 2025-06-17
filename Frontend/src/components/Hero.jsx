import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Hero = () => {
  const navigate = useNavigate();
  const handleMenu = () => {
    const token = Cookies.get("token");
    if (token !== undefined) {
      navigate("/menu");
    } else {
      alert("Please Login");
      navigate("/signin");
    }
  };
  return (
    <section className="flex justify-center items-center bg-gray-100">
      <section className="text-dark flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 pt-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-orange-400 font-medium uppercase tracking-wide mb-2">
            Fresh. Fast. Flavorsome.
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Favorite Meals, Delivered to Your Doorstep
          </h1>
          <p className="text-lg text-black-300 max-w-lg">
            Craving something delicious? Order from top restaurants in your area
            and enjoy mouthwatering meals — fresh, hot, and delivered
            lightning-fast.
          </p>
          <button
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300"
            onClick={handleMenu}
          >
            Explore Menu
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center ">
          <img
            src="https://res.cloudinary.com/dasvdkncm/image/upload/v1748162192/pngtree-food-delivery-rider-on-red-scooter-png-image_20753691-removebg-preview_hb4ocm.png"
            alt="Hero-image"
            className="w-full max-w-md md:max-w-xl "
          />
        </div>
      </section>
    </section>
  );
};

export default Hero;
