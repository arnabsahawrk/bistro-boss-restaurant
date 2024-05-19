import { useEffect } from "react";
import { useGetMenuOnCategory } from "../../hooks/TanStackQuery/useGet";
import Loader from "../common/Loader/Loader";
import Card from "../common/Card/Card";

const ChefRecommendsCards = () => {
  const { categoryAsync, menuOnCategory, categoryLoading } =
    useGetMenuOnCategory();

  useEffect(() => {
    categoryAsync("popular");
  }, [categoryAsync]);

  return (
    <>
      {categoryLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {menuOnCategory?.map((item) => (
              <Card key={item?._id} cardItem={item} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ChefRecommendsCards;
