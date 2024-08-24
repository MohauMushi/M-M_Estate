import House from "../../public/svg/House.svg";
import ShakingHands from "../../public/svg/ShakingHands.svg";
import Keys from "../../public/svg/Keys.svg";

const HouseIcon = () => <img src={House} />;

const HandsShaking = () => <img src={ShakingHands} />;

const HouseKeys = () => <img src={Keys} />;

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
    <div className="text-teal-600 w-8 h-8 mb-4">
      <Icon />
    </div>
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Service = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          Icon={HouseIcon}
          title="Research Phase"
          description="Find your dream vacation rental in just a few clicks."
        />
        <ServiceCard
          Icon={HandsShaking}
          title="Close The Deal"
          description="Finalize your vacation rental booking with ease and peace of mind. Book now and enjoy your stay!."
        />
        <ServiceCard
          Icon={HouseKeys}
          title="Key Delivery"
          description="Our simple key delivery system makes checking into your rental a breeze."
        />
      </div>
    </div>
  );
};

export default Service;
