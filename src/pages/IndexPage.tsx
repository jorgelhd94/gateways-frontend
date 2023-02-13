import { Link } from "react-router-dom";
import IconButton from "../components/atoms/buttons/IconButton/IconButton";
import { faLaptop, faServer } from "@fortawesome/free-solid-svg-icons";
import WelcomeImg from "../assets/welcome.svg";

const IndexPage = () => {
  return (
    <div className="bg-white mx-4 py-6 px-14 overflow-hidden rounded-lg relative lg:flex lg:items-center">
      <div className="w-full py-4 px-4 sm:px-6 lg:py-8 lg:px-8 z-20">
        <h2 className="text-2xl font-extrabold text-black sm:text-3xl">
          <span className="block">Hi there!!</span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
          Welcome to the Gateway Management System. This system allows you to
          register your gateways and their respective devices. You can start by
          creating a new master device and adding some peripherals to it.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Link to="/gateways/create">
              <IconButton type="primary" icon={faServer} showIcon={true}>
                New Gateway
              </IconButton>
            </Link>
            <Link to="/devices/create">
              <IconButton type="success" icon={faLaptop} showIcon={true}>
                New Device
              </IconButton>
            </Link>
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <img src={WelcomeImg} width={700} height={700} />
      </div>
    </div>
  );
};

export default IndexPage;
