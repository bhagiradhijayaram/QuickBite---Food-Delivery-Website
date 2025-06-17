import pizza from "../assets/categories/pizza.jpg";
import burger from "../assets/categories/burger.jpg";
import biryani from "../assets/categories/biryani.jpg";
import chinese from "../assets/categories/chinese.jpg";
import South from "../assets/categories/South.jpg";
import dessert from "../assets/categories/dessert.jpg";

const categories = [
  {
    name: "Pizza",
    image: pizza,
  },
  {
    name: "Burgers",
    image: burger,
  },
  {
    name: "Biryani",
    image: biryani,
  },
  {
    name: "Chinese",
    image: chinese,
  },
  {
    name: "South Indian",
    image: South,
  },
  {
    name: "Desserts",
    image: dessert,
  },
];

const Categories = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Categories</h2>
          <p className="text-gray-600 mt-2">
            Discover the best dishes from a variety of cuisines
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-36 object-cover rounded-xl shadow-sm transition-transform duration-150 ease-in-out hover:scale-105"
              />
              <p className="mt-2 text-sm font-medium text-gray-700 text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
