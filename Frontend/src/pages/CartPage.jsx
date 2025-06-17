import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { decrement, deleteTask, increment } from "../Redux/store";
import { useEffect } from "react";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Sync cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const deleteItemFromCart = (id) => {
    dispatch(deleteTask(id));
  };

  const increaseQuantity = (id) => {
    dispatch(increment(id));
  };

  const decreaseQuantity = (id) => {
    dispatch(decrement(id));
  };

  const price = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const discount = price * 0.1;
  const totalPrice = price - discount;

  return (
    <>
      <Header />
      <section className="min-h-full flex flex-col items-center px-4 py-8">
        {cartItems.length > 0 ? (
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border p-4 rounded shadow"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[80px] h-[80px] object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-gray-600">₹{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="w-8 h-8 bg-[#f1f1f1] rounded-full flex items-center justify-center text-lg leading-none"
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <button className="px-3 py-1">
                        Qty: {item.quantity || 1}
                      </button>
                      <button
                        className="w-8 h-8 bg-[#f1f1f1] rounded-full flex items-center justify-center text-lg leading-none"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => deleteItemFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="bg-gray-100 p-6 rounded shadow h-fit">
              <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-700">
                  Price ({cartItems.length} Items)
                </p>
                <p className="text-gray-700">₹{price}</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-700">Discount</p>
                <p className="text-gray-700">- ₹{discount}</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-700">Delivery Charges</p>
                <p className="text-gray-700">Free</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-700 font-bold">Total Price</p>
                <p className="text-gray-700 font-bold">₹{totalPrice}</p>
              </div>
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[80vh] text-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
              alt="Empty Cart"
              className="h-[300px]"
            />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-md text-gray-600 mb-4">
              You can go to menu to add items to your cart.
            </p>
            <Link
              to="/menu"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300"
            >
              Go to Menu
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default CartPage;
