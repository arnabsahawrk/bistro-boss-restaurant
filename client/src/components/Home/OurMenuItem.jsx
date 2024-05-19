import { useGetMenu } from "../../hooks/TanStackQuery/useGet";
import CommonButton from "../common/Button/CommonButton";
import Item from "../common/Card/Item";
import Loader from "../common/Loader/Loader";

const OurMenuItem = () => {
  const { menu, menuLoading } = useGetMenu(2, 6);

  return (
    <>
      {menuLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menu?.map((item) => (
              <Item key={item?._id} item={item} />
            ))}
          </div>
          <div className="text-center mt-4">
            <CommonButton text="View Full  Menu" link="/menu" />
          </div>
        </>
      )}
    </>
  );
};

export default OurMenuItem;
