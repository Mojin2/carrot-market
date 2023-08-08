import Layout from "@/components/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full max-w-xl mx-auto">{children}</div>;
}
