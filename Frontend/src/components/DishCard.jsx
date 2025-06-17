import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/store";

const DishCard = ({ dishDetails, addItemToCart }) => {
  const { id, image, name, description, price } = dishDetails;
  const dispatch = useDispatch();

  const quantity = useSelector((state) => {
    const item = state.cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  });

  const increaseQuantity = () => {
    dispatch(increment(id));
  };

  const decreaseQuantity = () => {
    dispatch(decrement(id));
  };

  return (
    <div className="bg-white rounded shadow p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="mt-4 text-xl font-semibold">{name}</h2>
      <p className="text-gray-600 mt-1">{description}</p>

      <div className="mt-4 flex items-center justify-between">
        <p className="font-bold text-lg">₹{price}</p>

        <div className="flex items-center gap-2">
          <button
            className="w-8 h-8 bg-[#f1f1f1] rounded-full flex items-center justify-center text-lg leading-none"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <p className="text-base">{quantity}</p>
          <button
            className="w-8 h-8 bg-[#f1f1f1] rounded-full flex items-center justify-center text-lg leading-none"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className="w-full mt-4 bg-orange-500 py-2 rounded text-white hover:bg-orange-600 transition"
        onClick={() => addItemToCart(id)}
      >
        {quantity > 0 ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default DishCard;
