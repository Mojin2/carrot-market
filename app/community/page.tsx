import { FaCheck, FaComment, FaPencilAlt } from "react-icons/fa";

export default function Community() {
  return (
    <div className="py-16 px-4 space-y-8">
      {Array(3)
        .fill(1)
        .map((_, i) => (
          <div key={i} className="flex flex-col items-start cursor-pointer">
            <span className="flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              동네 질문
            </span>
            <div className="mt-2 text-gray-700">
              <span className="text-orange-500 font-medium">Q.</span> What is
              the best mandu resaurant?
            </div>
            <div className="mt-5 flex items-center justify-between w-full text-gray-500 font-medium text-xs">
              <span>steve</span>
              <span>18 hours ago</span>
            </div>
            <div className="flex space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px] w-full">
              <span className="flex space-x-2 items-center text-sm">
                <FaCheck />
                <span>궁금해요 1</span>
              </span>
              <span className="flex space-x-2 items-center text-sm">
                <FaComment />
                <span>답변 1</span>
              </span>
            </div>
          </div>
        ))}
      <button className="fixed hover:bg-orange-500 transition cursor-pointer bottom-24 right-5 bg-orange-400 rounded-full p-4 shadow-xl text-white">
        <FaPencilAlt />
      </button>
    </div>
  );
}
