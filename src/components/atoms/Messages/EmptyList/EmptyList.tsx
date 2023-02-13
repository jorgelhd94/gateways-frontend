import EmptyImg from "../../../../assets/empty.svg";

const EmptyList = () => {
  return (
    <div className="flex relative flex-col justify-center w-full items-center pb-4">
      <img src={EmptyImg} width={250} />
      <h1 className="text-xl text-blue-800 font-semibold">No data to show!!</h1>
      <h1 className="text-xl">Please create a new element.</h1>
    </div>
  );
};

export default EmptyList;
