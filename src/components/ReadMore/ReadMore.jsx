import React, { useState } from "react";

export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      {isReadMore ? text.slice(0, 150) : text}
      {text.length > 150 ? (
        <a onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...readmore" : " showless"}
        </a>
      ) : (
        ""
      )}
    </>
  );
};
