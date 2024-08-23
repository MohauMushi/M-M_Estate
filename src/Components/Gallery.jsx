import { useState } from "react";
import CarouselComponent from "./Carousel";

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// eslint-disable-next-line react/prop-types
const DropdownSelect = ({ value, onChange, options, placeholder }) => (
  <div className="relative w-full sm:w-auto">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full appearance-none bg-[#88868620] text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <ChevronDownIcon />
    </div>
  </div>
);

const Gallery = () => {
  const [cityStreet, setCityStreet] = useState("");
  const [rentType, setRentType] = useState("");
  const [price, setPrice] = useState("");

  const cityStreets = [
    "Cape Town, Broadway",
    "Sandton, Oxford Street",
    "Midrand, Champs",
  ];
  const rentTypes = ["Apartment", "House", "Studio"];
  const prices = ["R8 000 - R10 000", "R10 000 - R15 000", "R15 000"];

  return (
    <section id="gallery" className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white rounded-3xl -mt-32 shadow-lg hover:shadow-xl transition-shadow p-4 mb-16 ">
          <div className="flex flex-col justify-evenly sm:flex-row gap-4 mb-4">
            <DropdownSelect
              value={cityStreet}
              onChange={setCityStreet}
              options={cityStreets}
              placeholder="City Street"
            />
            <DropdownSelect
              value={rentType}
              onChange={setRentType}
              options={rentTypes}
              placeholder="Typology of Rent"
            />
            <DropdownSelect
              value={price}
              onChange={setPrice}
              options={prices}
              placeholder="Prices"
            />
          </div>
          <button className="w-full bg-[#013237] hover:bg-[#008080] text-white font-bold py-3 px-4 rounded-full transition-colors flex items-center justify-center">
            <SearchIcon />
            <span className="ml-2">Search</span>
          </button>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-teal-700 mb-4">Most Viewed</h1>
          <p className="text-gray-600">
            Discover a range of vacation worldwide. Book securely and get expert
            customer support for a stress-free stay
          </p>
        </div>

        <div>
          <CarouselComponent />
        </div>

        {(cityStreet || rentType || price) && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg max-w-sm w-full mx-auto">
            <p className="font-semibold">Selected Options:</p>
            <p>{cityStreet && `City Street: ${cityStreet}`}</p>
            <p>{rentType && `Typology of Rent: ${rentType}`}</p>
            <p>{price && `Price Range: ${price}`}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
