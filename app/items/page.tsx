import { FaComment, FaHeart, FaPlus, FaPlusCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 py-10">
      {Array(3)
        .fill(1)
        .map((_, i) => (
          <div
            key={i}
            className="flex border-b pb-4 px-4 cursor-pointer justify-between"
          >
            <div className="flex space-x-4">
              <div className="w-20 h-20 bg-gray-400 rounded-md" />
              <div className="pt-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  New iPhone 14
                </h3>
                <span className="text-xs text-gray-500">Black</span>
                <span className="font-medium mt-1 text-gray-900">$95</span>
              </div>
            </div>
            <div className="flex items-end justify-end space-x-1.5">
              <div className="flex items-center text-sm text-gray-600 space-x-0.5">
                <FaHeart />
                <span>1</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 space-x-0.5">
                <FaComment />
                <span>1</span>
              </div>
            </div>
          </div>
        ))}
      <button className="fixed hover:bg-orange-500 transition cursor-pointer bottom-24 right-5 bg-orange-400 rounded-full p-4 shadow-xl text-white">
        <FaPlus />
      </button>
    </div>
  );
}
