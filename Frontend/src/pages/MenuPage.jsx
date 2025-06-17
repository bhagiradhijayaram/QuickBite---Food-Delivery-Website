import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { IoSearch } from "react-icons/io5";
import DishCard from "../components/DishCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { addTask } from "../Redux/store";
import { useDispatch } from "react-redux";

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const [allDishes, setAllDishes] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();

  const fetchMenuData = async () => {
    const response = await fetch("/data/foodDeliveryData.json");
    const data = await response.json();
    setAllDishes(data.menuItems);
    setDishes(data.menuItems);
    setMenu(data.categories);
  };
  useEffect(() => {
    fetchMenuData();
  }, []);

  // filter dishes by category
  const filterByCategory = (category) => {
    console.log("Active tab was clicked..!" + category);
    if (category === "ALL") {
      setDishes(allDishes);
    } else {
      const filterMenu = allDishes.filter((dish) => dish.category === category);
      setDishes(filterMenu);
    }
  };

  // // filter dishes by search
  // const handleSearch = (value) => {
  //   setSearchVal(value);
  //   const filterMenu = allDishes.filter((dish) =>
  //     dish.name.toLowerCase().includes(searchVal.toLowerCase())
  //   );
  //   setDishes(filterMenu);
  // };

  // add item to cart
  const addItemToCart = (id) => {
    const cartItem = allDishes.find((dish) => dish.id === id);
    dispatch(addTask(cartItem));
  };

  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center">
        <section className="mt-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Menu</h2>
            <p className="text-gray-600 mt-2">
              Crave-worthy meals, chosen based on what food lovers enjoy the
              most.
            </p>
          </div>

          <div className="flex flex-col gap-4  md:items-center md:justify-between px-4 max-w-7xl mx-auto mb-6">
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-4 w-full md:w-auto">
              {menu.length > 0
                ? menu.map((eachMenu) => (
                    <Menu
                      key={eachMenu.id}
                      menuDetails={eachMenu}
                      filterByCategory={filterByCategory}
                    />
                  ))
                : ""}
            </div>

            {/* <div className="flex items-center bg-gray-200 rounded px-2  w-full md:w-auto ">
              <input
                type="search"
                placeholder="Search..."
                className="bg-transparent outline-none flex-1 w-full p-2"
                value={searchVal}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <IoSearch className="text-gray-500" />
            </div> */}
          </div>

          <div className="mb-12">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto w-full gap-6">
              {dishes.length ? (
                dishes.map((dish) => (
                  <DishCard
                    dishDetails={dish}
                    key={dish.id}
                    addItemToCart={addItemToCart}
                  />
                ))
              ) : (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 max-w-7xl">
                  <div className="flex justify-center items-center w-full min-h-[400px]">
                    <p>Menu Loading...</p>
                  </div>
                </div>
              )}
            </section>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default MenuPage;
