import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap px-4 py-3  bg-white rounded-full">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 bg-red-700 text-white rounded-full mr-2"
          >
            Red
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-2 bg-white-700 text-black rounded-full mr-2"
          >
            White
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 bg-blue-700 text-white rounded-full mr-2"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-1 px-4 py-2 bg-green-700 text-white rounded-full"
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
