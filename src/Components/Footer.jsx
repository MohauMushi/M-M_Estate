import FacebookIcon from "../assets/Facebook.svg";
import LinkedInIcon from "../assets/LinkedIn.svg";
import YoutubeIcon from "../assets/Youtube.svg";
import InstagramIcon from "../assets/Instagram.svg"

const Footer = () => {
  return (
    <footer className="bg-[#01323708] text-gray-600 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center text-center md:text-left">
          {/* Logo and social links */}
          <div className="col-span-1 lg:col-span-1 w-full max-w-xs">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <svg
                className="h-6 w-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="font-bold text-teal-700 text-xl">M&M Estate</span>
            </div>
            <p className="mb-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <img
                    src={FacebookIcon}
                    alt="Facebook Icon"
                    className="h-6 w-6"
                  />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <img
                    src={LinkedInIcon}
                    alt="LinkedIn Icon"
                    className="h-6 w-6"
                  />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">YouTube</span>
				  <img
                    src={YoutubeIcon}
                    alt="Youtube Icon"
                    className="h-6 w-6"
                  />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
				  <img
                    src={InstagramIcon}
                    alt="Instagram Icon"
                    className="h-6 w-6"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Product column */}
          <div className="w-full max-w-xs">
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              {["Features", "Pricing", "Case studies", "Reviews"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company column */}
          <div className="w-full max-w-xs">
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Contact us", "Careers", "Culture", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support column */}
          <div className="w-full max-w-xs">
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                "Getting started",
                "Help center",
                "Server status",
                "Report a bug",
                "Chat support",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact us column */}
          <div className="w-full max-w-xs">
            <h3 className="font-semibold text-gray-900 mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:m&mestate@company.co.za"
                  className="text-sm hover:text-gray-900"
                >
                  m&mestate@company.co.za
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+27142571554"
                  className="text-sm hover:text-gray-900"
                >
                  (+27) 14 257 1554
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <svg
                  className="h-5 w-5 mr-2 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm">
                  794 Kruger St
                  <br />
                  Rustenburg, 94102
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
