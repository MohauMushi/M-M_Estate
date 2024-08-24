import House from "../../public/svg/House.svg";
import ShakingHands from "../../public/svg/ShakingHands.svg";
import Keys from "../../public/svg/Keys.svg";
import UserIcon from "../../public/svg/user.svg";
import Tags from "../../public/svg/Tags.svg";

const HouseIcon = () => <img src={House} />;

const HandsShaking = () => <img src={ShakingHands} />;

const HouseKeys = () => <img src={Keys} />;
const User = () => <img src={UserIcon} />;
const DiscountTags = () => <img src={Tags} />;

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
    <>
      <section
        id="services"
        className="max-h-screen w-full flex items-center justify-center px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto px-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
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

          <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start gap-8">
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h1 className="text-3xl font-bold mb-4 text-teal-800">
                Get the house in trust by working with our agents
              </h1>
              <div className="flex items-center mb-8">
                <div className="text-yellow-400 m-5">
                  <User />
                </div>
                <p className="text-gray-600 ">
                  After a simple phone call, our agent will come to your aid,
                  making you feel at ease and trying to understand your needs.
                  Empathy is essential for understanding the customer`s needs
                </p>
              </div>
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 m-4">
                  <DiscountTags />
                </div>
                <p className="text-gray-600 mb-4">
                  The best deals don`t last long, which is ehy we can contact
                  you in case of unmissable flash sales in your preferred areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
