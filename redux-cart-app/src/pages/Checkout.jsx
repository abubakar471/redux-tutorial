import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../store/cart.selector";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../store/cart.action";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const addItemHandler = (cartItems, cartItem) =>
    dispatch(addItemToCart(cartItems, cartItem));

  const removeItemHandler = (cartItems, cartItem) =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const clearItemHandler = (cartItems, cartItem) =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full mt-10">
        {/* checkout header */}
        <div className="flex items-center justify-between">
          <div className="text-lg font-light w-[200px] px-2">
            <span>Product</span>
          </div>

          <div className="text-lg font-light w-[200px] px-2">
            <span>Description</span>
          </div>

          <div className="text-lg font-light w-[200px] px-2">
            <span>Quantity</span>
          </div>

          <div className="text-lg font-light w-[200px] px-2">
            <span>Price</span>
          </div>

          <div className="text-lg font-light w-[200px] px-2">
            <span>Remove</span>
          </div>
        </div>

        {/* checkout items */}

        {cartItems.map((cartItem) => {
          return (
            <div className="flex items-center justify-between my-2">
              <div className="text-lg font-light w-[200px] px-2">
                <img src={cartItem.imgUrl} alt={cartItem.name} />
              </div>

              <div className="text-lg font-light w-[200px] px-2">
                <span>{cartItem.name}</span>
              </div>

              <div className="text-lg font-light w-[200px] px-2 flex items-center gap-x-1">
                <div
                  className="cursor-pointer"
                  onClick={() => removeItemHandler(cartItems, cartItem)}
                >
                  &#10094;
                </div>
                <span className="value">{cartItem.quantity}</span>
                <div
                  className="cursor-pointer"
                  onClick={() => addItemHandler(cartItems, cartItem)}
                >
                  &#10095;
                </div>
              </div>

              <div className="text-lg font-light w-[200px] px-2">
                <span>{cartItem.price}</span>
              </div>

              <div
                className="text-lg font-light w-[200px] px-2 cursor-pointer"
                onClick={() => clearItemHandler(cartItems, cartItem)}
              >
                &#10005;
              </div>
            </div>
          );
        })}

        <div className="text-2xl mt-2">Total : $ {cartTotal}</div>
      </div>
    </div>
  );
};

export default Checkout;
