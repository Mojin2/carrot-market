import Layout from "@/components/layout";

export default function Chats() {
  return (
    <Layout title="Chat" hasTabBar>
      <div className="py-6 divide-y-[1px]">
        {Array(3)
          .fill(1)
          .map((_, i) => (
            <div
              key={i}
              className="px-4 flex items-center space-x-3 py-3 cursor-pointe"
            >
              <div className="w-12 h-12 rounded-full bg-slate-300" />
              <div>
                <p className=" text-gray-700">Steve Jebs</p>
                <p className="text-sm text-gray-500 pb-4">
                  See you tomorrow in the corner at 2pm!
                </p>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
}
