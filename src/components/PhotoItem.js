import React from "react";

export const PhotoItem = ({ item }) => {
  return (
    <div className="max-w-sm rounded shadow-lg overflow-hidden">
      <img
        className="w-full"
        src={item.urls.regular}
        alt={item.alt_description}
      />
      <div className="px-6 py-2">
        <div className="text-purple-700 font-bold text-lg mb-2">
          Photo by {item.user.username}
        </div>
        <ul>
          <li>
            <strong>Description: </strong>
            {item.description}
          </li>

          <li>
            <strong>Likes: </strong>
            {item.likes}
          </li>
        </ul>
      </div>
      <div className="py-2 px-4 my-4">
        {item.tags.map((i, index) => (
          <span
            key={index}
            className="rounded-full bg-purple-500 text-white p-2 mx-2 "
          >
            #{i.title}
          </span>
        ))}
      </div>
    </div>
  );
};
