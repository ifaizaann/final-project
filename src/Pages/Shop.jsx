import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";

import NewCollections from "../Components/NewCollections/NewCollections";

import data from "../Components/Assets/data";
import new_collections from "../Components/Assets/new_collections";
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular data={data} />

      <NewCollections data={new_collections} />
    </div>
  );
};

export default Shop;
