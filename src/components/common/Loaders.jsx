import Button from "./Button";

const Loaders = () => {
  return (
    <div className="text-4xl font-bold text-gray-700 font-mono animate-spin duration-1000 gap-3.5 grid">
      <Button className="bg-blue-700 rounded-full px-2 p-2 text-white"></Button>
      <Button className="bg-blue-700 rounded-full px-2 p-2 text-white"></Button>
    </div>
  );
};

export default Loaders;
