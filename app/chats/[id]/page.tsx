import { FaArrowRight } from "react-icons/fa";

export default function ChatDetail() {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-grey-700 p-2 border rounded-md border-gray-300">
          <p>Hi, How much are you selling?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-grey-700 p-2 border rounded-md border-gray-300">
          I want $20,000
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-grey-700 p-2 border rounded-md border-gray-300">
          <p>No thanks</p>
        </div>
      </div>
      <div className="fixed bottom-0 py-2 inset-x-0">
        <div className="flex relative items-center mx-auto max-w-md w-full">
          <input
            type="text"
            className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 pr-12"
          />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none  items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600 cursor-pointer">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
