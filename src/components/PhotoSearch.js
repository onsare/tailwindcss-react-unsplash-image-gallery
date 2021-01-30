import React from "react";
import { useState } from "react";

const PhotoSearch = ({ searchKeyword }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    searchKeyword(text);

    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="max-w-sm overflow-hidden mx-auto my-10">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center border-b-2 border-purple-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-500 outline-none focus:outline-none mr-3 py-1 px-2 leading-tight"
            type="text"
            name="search"
            placeholder="Search keyword..."
            id="search"
            onChange={handleChange}
            value={text}
          />
          <button
            className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 text-white border-purple-500 border-4 hover:border-purple-700 rounded py-1 px-4"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default PhotoSearch;
