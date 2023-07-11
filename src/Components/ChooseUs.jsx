import React from "react";
import WhyChooseUs from "./componets/WhyChooseUs";

const ChooseUs = () => {
  // Sample product data
  const products = [
    {
      name: "Product 1",
      image: "product1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 10.99,
    },
    {
      name: "Product 2",
      image: "product2.jpg",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 19.99,
    },
    // Add more products as needed
  ];

  return (
    <div>
      {products.map((product, index) => (
        <EcommerceCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ChooseUs;
