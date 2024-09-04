const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full flex items-center justify-center px-4 py-16 sm:py-24 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        <div className="w-full md:w-1/2 p-4 mb-8 md:mb-0">
          <img
            src="../../images/rendering-wooden-house.jpg"
            alt="rendering wooden house"
            className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] border border-white font-bold mb-4">
            The Easiest Method To Find a House
          </h1>
          <p className="mb-4">
            M&M.co.za is the perfect site for anyone looking to rent a home in
            Cape Town, Midrand, and Sandton. We specialize in finding apartment,
            vacation homes, villas, and luxury properties across the country.
          </p>
          <p className="mb-6">
            With our easy-to-use search tool and extensive listings, finding
            your dream home has never been easier
          </p>
          <button className="bg-teal-800 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-3xl self-start">
            Try now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
