import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
  
    (<div className="flex justify-center ">

      {/* left div  */}
      <div className="flex flex-col">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      {/* right div  */}
      <div className="flex flex-col justify-between mt-12 ml-12 mb-16 mr-2">

        {/* Upper  */}
        <div>
          <div className="text-green-700 font-semibold uppercase text-xs">Your Cart</div>
          <div className="text-green-700 font-semibold uppercase text-lg">Summary</div>
          <p>
            <span className="font-bold">Total Items: {cart.length}</span>
          </p>
        </div>
        
        {/* Bottom  */}
        <div>
          <p>Total Amount: <span className="font-bold">${totalAmount}</span></p>
          <button
          className="text-white border-2 bg-green-700 border-gray-700 rounded-md font-semibold 
          text-[12px] p-1 px-3 w-full mt-2
          hover:bg-green-800 transition duration-300 ease-in">
            Checkout Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center h-[450px]">

      <h1 className="font-semibold">Your Cart is Empty!</h1>
      <Link to={"/"}>
        <button
        className="text-white border-2 uppercase bg-green-600 border-slate-400 rounded-md font-semibold 
          text-[12px] p-1 px-3 w-full mt-2
          hover:bg-green-700 transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
