import CubeSvg from "../../../../assets/cube.svg";

const LoadingScreen = () => {
  return (
    <div className="absolute z-50">
      <div className="flex justify-center items-center h-screen w-screen">
        <div>
          <img src={CubeSvg} width={80} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
