const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center px-4 sm:px-6 lg:px-8"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/Home_page_image.jpg')" }}
      ></div>
      <div className="relative z-10 text-left max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-white mb-4 sm:mb-6">
          Finding Your New Home Is Simple
        </h1>
        <p className="text-sm sm:text-base text-white w-full sm:w-3/4 mb-6 sm:mb-8">
          M&M.co.za is your go-to destination for finding the perfect rental
          home to suit your needs. With thousands of property listings across
          South Africa
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#ffffff31] text-white py-3 px-6 rounded-full text-base sm:text-lg font-semibold hover:bg-[#ffffff50] transition-colors w-full sm:w-auto flex items-center justify-between">
            <span>Search</span>
            <span className="ml-2 sm:ml-4 lg:ml-[12rem]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
