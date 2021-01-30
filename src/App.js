import React, { useState, useEffect } from "react";
import { PhotoItem } from "./components/PhotoItem";

import PhotoSearch from "./components/PhotoSearch";
import Footer from "./components/Footer";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("office");

  useEffect(() => {
    fetchItems(keyword);
  }, [keyword]);

  async function fetchItems(kw) {
    try {
      let res = await fetch(
        `https://api.unsplash.com/search/photos?&page=1&query=${kw}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
      );

      const data = await res.json();
      setItems(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container mx-auto">
        <PhotoSearch searchKeyword={(text) => setKeyword(text)} />
        {!loading && items.length === 0 && (
          <div className="flex items-center justify-center h-full w-full">
            <h1 className="text-4xl">No image found</h1>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center h-full w-full">
            <h1 className="text-4xl">Loading....</h1>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            {items.map((item) => (
              <PhotoItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
