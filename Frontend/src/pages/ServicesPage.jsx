import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaShippingFast,
  FaMapMarkedAlt,
  FaUtensils,
  FaCreditCard,
  FaTags,
  FaHeadset,
  FaStar,
} from "react-icons/fa";
import { IoAlarm } from "react-icons/io5";

const services = [
  {
    title: "Instant Food Delivery",
    desc: "Get your meals delivered in under 30 minutes from nearby restaurants.",
    icon: <FaShippingFast />,
    bgColor: "bg-orange-600",
  },
  {
    title: "Live Order Tracking",
    desc: "Track your order in real-time from the kitchen to your doorstep.",
    icon: <FaMapMarkedAlt />,
    bgColor: "bg-orange-400",
  },
  {
    title: "Top Restaurants",
    desc: "Browse menus and offers from the best-rated local restaurants.",
    icon: <FaUtensils />,
    bgColor: "bg-orange-300",
  },
  {
    title: "Multiple Payment Options",
    desc: "Pay via UPI, card, wallet, or cash on delivery with complete security.",
    icon: <FaCreditCard />,
    bgColor: "bg-orange-400",
  },
  {
    title: "Exciting Offers",
    desc: "Get exclusive deals, discounts, and daily offers on your favorite meals.",
    icon: <FaTags />,
    bgColor: "bg-orange-300",
  },
  {
    title: "24/7 Customer Support",
    desc: "Need help? Our support team is always available to assist you.",
    icon: <FaHeadset />,
    bgColor: "bg-orange-400",
  },
];

const restaurants = [
  {
    id: 1,
    name: "Spicy Bites",
    category: "Indian",
    rating: 4.5,
    deliveryTime: "30-40 min",
    image: "/images/restaurants/restaurant-1.jpg",
    description:
      "Authentic Indian flavors that bring the heat! From biryanis to butter chicken, Spicy Bites delivers bold taste with every order.",
  },
  {
    id: 2,
    name: "Burger Nation",
    category: "Burgers",
    rating: 4.2,
    deliveryTime: "20-30 min",
    image: "/images/restaurants/restaurant-2.jpg",
    description:
      "Juicy, handcrafted burgers with a twist. Burger Nation is your go-to for cheesy, saucy, and fully loaded bites.",
  },
  {
    id: 3,
    name: "Pizza Express",
    category: "Pizza",
    rating: 4.7,
    deliveryTime: "25-35 min",
    image: "/images/restaurants/restaurant-3.jpg",
    description:
      "Freshly baked pizzas with premium toppings and gooey cheese. Pizza Express is the perfect pick for pizza lovers.",
  },
];

const ServicesPage = () => {
  return (
    <>
      <Header />
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <p className="text-gray-600 mt-2">
              Crave-worthy meals, chosen based on what food lovers enjoy the
              most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-md transition text-left border-t border-t-orange-600 p-6 transition-transform duration-150 ease-in-out hover:scale-105"
              >
                <div
                  className={`mb-4 ${service.bgColor} p-4 w-[70px] h-[70px] rounded-full text-white text-2xl flex items-center justify-center`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <section className="bg-[url('https://res.cloudinary.com/dasvdkncm/image/upload/v1749476918/restaurant-hall-with-bright-color-sitting-furniturs-panoramic-windows_bnfutw.jpg')] bg-cover bg-center h-64 w-full flex flex-col justify-center text-white mt-12">
            <div className="max-w-5xl mx-auto text-center p-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Delicious Food Delivered To Your Doorstep
              </h2>
              <p className="text-md sm:text-lg mb-6">
                Enjoy fast, fresh, and hygienically prepared meals from your
                favorite local restaurants — all in just a few clicks.
              </p>
              <p className="inline-block bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                Order Now
              </p>
            </div>
          </section>
          <section className="text-center my-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Our Partner Restaurants
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover top-rated restaurants delivering your favorite meals
              right to your doorstep. Handpicked for quality, taste, and fast
              delivery — just for you!
            </p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white shadow-sm rounded-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md duration-300"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {restaurant.description}
                  </p>
                  <div className="flex justify-between text-sm text-gray-700 font-medium">
                    <div className="flex items-center gap-1">
                      <span>
                        <FaStar color="#FFD700" />
                      </span>
                      <span>{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>
                        <IoAlarm size={18} />
                      </span>
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="bg-white py-10 px-4 md:px-8 lg:px-16 border-t border-gray-200">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-10">
                How It Works
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <div className="text-orange-500 text-4xl font-bold mb-2">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Choose a Service
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Browse our offerings and pick what you need—delivery,
                    catering, or pickup.
                  </p>
                </div>
                <div>
                  <div className="text-orange-500 text-4xl font-bold mb-2">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Place Your Order
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fill out your details, pick your time slot, and confirm your
                    order securely.
                  </p>
                </div>
                <div>
                  <div className="text-orange-500 text-4xl font-bold mb-2">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Sit Back & Enjoy
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We’ll handle the rest — on time, every time. Enjoy your
                    delicious meal!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
