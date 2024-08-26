import House from "../../public/svg/House.svg";
import ShakingHands from "../../public/svg/ShakingHands.svg";
import Keys from "../../public/svg/Keys.svg";
import UserIcon from "../../public/svg/user.svg";
import Tags from "../../public/svg/Tags.svg";

const HouseIcon = () => <img src={House} alt="House" />;
const HandsShaking = () => <img src={ShakingHands} alt="Shaking Hands" />;
const HouseKeys = () => <img src={Keys} alt="House Keys" />;
const User = () => <img src={UserIcon} alt="User" />;
const DiscountTags = () => <img src={Tags} alt="Discount Tags" />;

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
    <div className="text-teal-600 w-8 h-8 mb-4">
      <Icon />
    </div>
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Service = () => {
  return (
    <section
      id="services"
      className="w-full flex items-center justify-center px-4 py-16 sm:py-24 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            Icon={HouseIcon}
            title="Research Phase"
            description="Find your dream vacation rental in just a few clicks."
          />
          <ServiceCard
            Icon={HandsShaking}
            title="Close The Deal"
            description="Finalize your vacation rental booking with ease and peace of mind. Book now and enjoy your stay!"
          />
          <ServiceCard
            Icon={HouseKeys}
            title="Key Delivery"
            description="Our simple key delivery system makes checking into your rental a breeze."
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-800">
              Get the house in trust by working with our agents
            </h1>
            <div className="flex items-start mb-8">
              <div className="text-yellow-400 mr-4 mt-1">
                <User />
              </div>
              <p className="text-gray-600">
                After a simple phone call, our agent will come to your aid,
                making you feel at ease and trying to understand your needs.
                Empathy is essential for understanding the customer's needs
              </p>
            </div>
            <div className="flex items-start mb-8">
              <div className="text-yellow-400 mr-4 mt-1">
                <DiscountTags />
              </div>
              <p className="text-gray-600">
                The best deals don't last long, which is why we can contact you
                in case of unmissable flash sales in your preferred areas.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <img
              src="../../images/real-estate-agent.jpg"
              alt="Real Estate Agent"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
