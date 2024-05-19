import { TbFidgetSpinner } from "react-icons/tb";
const Loader = () => {
  return (
    <div className="size-full flex justify-center items-center">
      <TbFidgetSpinner className="text-[#EEFF25] text-9xl animate-spin" />
    </div>
  );
};

export default Loader;
