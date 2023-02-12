import CubeSvg from "../../../../assets/cube.svg";

const LoadingScreen = () => {
  return (
    <div className='absolute h-screen w-full bg-white z-50'>
      <div className="flex justify-center h-screen w-screen">
        <img src={CubeSvg} width={60} height={60} />
      </div>
    </div>
  );
};

export default LoadingScreen;
