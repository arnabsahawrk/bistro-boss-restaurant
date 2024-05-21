import Container from "../common/Container/Container";
import { useGetMenuOnCategory } from "../../hooks/TanStackQuery/useGet";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import Loader from "../common/Loader/Loader";
import Card from "../common/Card/Card";

const categories = [
  "salad",
  "pizza",
  "soup",
  "dessert",
  "drinks",
  "offered",
  "popular",
];
const OurShopItemShowcase = () => {
  const { category } = useParams();

  let initialIndex = categories.indexOf(category);
  if (initialIndex < 0) initialIndex = 0;

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const { categoryAsync, menuOnCategory, categoryLoading } =
    useGetMenuOnCategory();

  useEffect(() => {
    categoryAsync(categories[tabIndex]);
  }, [categoryAsync, tabIndex]);

  return (
    <section className="py-10">
      <Container>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
            <Tab>Offered</Tab>
            <Tab>Popular</Tab>
          </TabList>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
        </Tabs>
      </Container>
    </section>
  );
};

export default OurShopItemShowcase;
