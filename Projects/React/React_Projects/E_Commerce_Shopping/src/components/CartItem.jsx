import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex justify-between items-start w-100 mt-10 mb-10 border-b-2 border-b-slate-400">

        <div className="h-[180px]">
          <img src={item.image}  className="h-full w-full mx-auto p-4"/>
        </div>

        <div>

          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <p className="w-40 text-gray-400 font-normal text-[10px] text-left mt-2">{item.description.split(" ").slice(0,16).join(" ") + "..."}</p>

          <div className="flex justify-between mr-4 mt-6">
            <p className="text-green-600 font-semibold"> ${item.price}</p>
            <div
            onClick={removeFromCart}>
              <MdDeleteForever />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
