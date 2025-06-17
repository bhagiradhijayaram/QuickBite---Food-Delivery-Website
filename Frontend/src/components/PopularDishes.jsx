import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import DishCard from "./DishCard";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/store";

const PopularDishes = () => {
  const [dishes, setDishes] = useState([]);
  const dispatch = useDispatch();
  const fetchDishesData = async () => {
    const response = await fetch("/data/foodDeliveryData.json");
    const data = await response.json();
    setDishes(data.menuItems);
  };

  useEffect(() => {
    fetchDishesData();
  }, []);

  const addItemToCart = (id) => {
    const cartItem = dishes.find((dish) => dish.id === id);
    dispatch(addTask(cartItem));
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Popular Dishes</h2>
        <p className="text-gray-600 mt-2">
          Crave-worthy meals, chosen based on what food lovers enjoy the most.
        </p>
      </div>

      <div className="flex justify-center items-center mb-12">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto w-full gap-4">
          {dishes.slice(0, 4).map((dish) => (
            <DishCard
              dishDetails={dish}
              key={dish.id}
              addItemToCart={addItemToCart}
            />
          ))}
        </section>
      </div>
      <div className="flex justify-center items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition duration-300">
        <Link to="/menu">Explore Our Menu</Link>
        <GoArrowRight size={18} />
      </div>
    </section>
  );
};

export default PopularDishes;
