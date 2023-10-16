import { Link, useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart.action";
import {
  selectCartCount,
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  // its for cart dropdown
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="bg-white sticky top-0 left-0 w-full">
      <nav className="w-[80%] mx-auto py-8 flex items-center justify-between relative">
        <Link to="/">
          <h1 className="text-3xl text-[#62c03d]">Redux Cart {"</>"} </h1>
        </Link>

        <div className="flex gap-x-2 items-center">
          <Link
            to="/"
            className="text-md border-b-2 border-green-500 text-green-500"
          >
            Home
          </Link>
          <Link to="/shop" className="text-md hover:border-b-2 border-black">
            Shop
          </Link>
          <Link to="/" className="text-md hover:border-b-2 border-black">
            About
          </Link>

          <button
            className="relative cursor-pointer"
            onClick={() => toggleIsCartOpen()}
          >
            <h1 className="text-md border-gray-300 border-[1px] rounded-md px-4">
              Cart
            </h1>
            <div className="bg-red-500 text-white w-[20px] h-[20px] rounded-full flex items-center justify-center absolute right-[-10%] top-[-10%]">
              {cartCount}
            </div>
          </button>

          {isCartOpen && (
            <div className="absolute top-20 w-[250px] h-[300px] bg-white shadow-lg border-[1px] right-0 p-2 flex flex-col">
              <div className="flex-grow overflow-y-auto">
                {cartItems.length === 0 && (
                  <div className="flex items-center justify-center text-gray-500 h-full">Cart is empty</div>
                )}
                {cartItems &&
                  cartItems.map((cartItem) => (
                    <div key={cartItem.id} className="flex my-2 gap-x-2">
                      <img
                        src={cartItem.imgUrl}
                        className="w-[60px] h-[60px]"
                        alt="cart-items"
                      />

                      <div>
                        <h2 className="text-sm"> {cartItem.name}</h2>
                        <h3 className="text-[12px]">
                          {cartItem.price} x {cartItem.quantity}
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="p-1">
                <button onClick={goToCheckoutHandler} className="p-2 bg-green-500 text-white w-full ">
                  Go to checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
