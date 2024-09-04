import { useState } from "react";
import bed from "../../public/svg/bed.svg";
import bath from "../../public/svg/bath.svg";

const properties = [
  {
    id: 1,
    image: "../../images/House1.jpg",
    street: "123 Main St",
    bedrooms: 5,
    bathrooms: 5.5,
    location: "Midstream Ridge, Centurion",
    price: 6990000,
  },
  {
    id: 2,
    image: "../../images/House2.jpg",
    street: "456 Elm St",
    bedrooms: 4,
    bathrooms: 3,
    location: "Fountainbrook Estate, Midrand",
    price: 4785000,
  },
  {
    id: 3,
    image: "../../images/House3.jpg",
    street: "789 Oak St",
    bedrooms: 3,
    bathrooms: 3,
    location: "Franschhoek, Cape Town",
    price: 9750000,
  },
  {
    id: 4,
    image: "../../images/House4.jpg",
    street: "101 Pine St",
    bedrooms: 4,
    bathrooms: 4,
    location: "Clifton, Cape Town",
    price: 39950000,
  },
  {
    id: 5,
    image: "../../images/House5.jpg",
    street: "202 Maple Ave",
    bedrooms: 4,
    bathrooms: 4.5,
    location: "Claremount Upper, Cape Town",
    price: 16950000,
  },
];

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === properties.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 3 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {properties.map((property) => (
          <div
            key={property.id}
            className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-2"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={property.image}
                alt={property.street}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{property.street}</h2>
                <p className="mb-1 flex items-center justify-center">
                  <img src={bed} className="h-6 mr-2 ml-2" />{" "}
                  {property.bedrooms}{" "}
                  <img src={bath} className="h-6 mr-2 ml-7" />
                  {property.bathrooms}{" "}
                </p>
                <p className="mb-1">{property.location}</p>
                <p className="text-lg font-semibold">
                  R {property.price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default CarouselComponent;
