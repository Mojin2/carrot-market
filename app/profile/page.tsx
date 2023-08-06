import {
  FaCartArrowDown,
  FaHeart,
  FaShoppingBag,
  FaShoppingBasket,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";

export default function Profile() {
  return (
    <div className="py-10 px-4">
      <div className="flex items-center space-x-3">
        <div className="w-16 h-16 bg-slate-300 rounded-full" />
        <div className="flex flex-col">
          <span className="font-medium text-gray-900">Steve Jebs</span>
          <span className="text-sm text-gray-700">Edit profile</span>
        </div>
      </div>
      <div className="mt-10 flex justify-around">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 text-2xl text-white bg-orange-500 rounded-full flex items-center justify-center">
            <FaShoppingBasket />
          </div>
          <span className="text-sm font-medium text-gray-700 mt-2">
            판매내역
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 text-2xl text-white bg-orange-500 rounded-full flex items-center justify-center">
            <BsHandbagFill />
          </div>
          <span className="text-sm font-medium text-gray-700 mt-2">
            구매내역
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 text-2xl text-white bg-orange-500 rounded-full flex items-center justify-center">
            <FaHeart />
          </div>
          <span className="text-sm font-medium text-gray-700 mt-2">
            관심목록
          </span>
        </div>
      </div>
      <div className="mt-12">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <h4 className="text-sm font-bold text-gray-900">Steve</h4>
            <div className="flex items-center space-x-0.5">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="mt-4 text-gray-600 text-sm">
          <p>Detail Reviews : Good</p>
        </div>
      </div>
    </div>
  );
}
