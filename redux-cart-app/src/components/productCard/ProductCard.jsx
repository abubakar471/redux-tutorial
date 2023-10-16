import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart.selector";
import { addItemToCart } from "../../store/cart.action";

const ProductCard = ({ item }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, item));

  return (
    <div className="w-[300px] h-[350px] shadow-lg">
      <img
        src={item.imgUrl}
        alt={item.name}
        className="object-fill w-full h-[250px]"
      />

      <div className="p-2">
        <div className="flex items-center justify-between">
        <h2>{item.name}</h2>

        <h2 className="text-[#93AE46]">$ {item.price}</h2>
        </div>

        <div className="flex items-center justify-center mt-4">
          <button
          onClick={addProductToCart}
            className="bg-[#93AE46] hover:bg-[#72863a] transition-all ease-in duration-300 text-white w-full p-2 flex
             gapx-x-2 items-center justify-center"
          >
            <img
              src="/images/cart2.png"
              alt="cart"
              className="w-[30px] h-[30px]"
            />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProductCard