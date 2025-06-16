import Products from "../components/Products";

export default function Order() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-8 bg-gray-300">
      <h1 className="text-4xl text-gray-800 font-bold mb-8">Order Page</h1>
      <Products />
    </div>
  );
}
