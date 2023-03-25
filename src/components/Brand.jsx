import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ value }) => {
  // console.log(value);
  const handleCategoryProducts = (category) => {
    alert(category);
    fetch(`http://localhost:5000/product/${category}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="max-w-screen-sm ">
      <Link to={value?.category}>
        <h2
          onClick={() => handleCategoryProducts(value?.category)}
          class="  py-3 rounded-lg border  border-gray-300  font-medium text-xl text-gray-900"
        >
          {value?.category}
        </h2>
      </Link>
    </div>
  );
};

export default Brand;
