import React, { useState } from "react";

const Footer = () => {
  const [date] = useState(new Date().getFullYear());
  return (
    <div className="mt-2 bg-purple-500 py-10 text-center text-white font-semibold">
      <p>&copy;{date} Photo Gallery </p>
      <p>
        Credits: <a href="https://unsplash.com">https://unsplash.com</a>
      </p>
    </div>
  );
};

export default Footer;
