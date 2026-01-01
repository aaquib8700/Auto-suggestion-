import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  console.log(input);

  const initAPICall = async () => {
    const url = `https://api.frontendeval.com/fake/food/${input}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setList(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (input) {
      initAPICall();
    }
  }, [input]);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Debounce API Call</h1>
      <input
        className="w-[200px] h-[30px] p-3 text-lg outline-2"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      {list && list.length > 0 && (
        <div className="w-[200px] h-[250px] bg-zinc-300 text-lg mx-auto my-4 text-left p-1 overflow-y-auto">
          {list &&
            list.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
        </div>
      )}
    </div>
  );
};

export default App;
