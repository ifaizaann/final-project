import "./CSS/ShopCategory.css";

import Item from "../Components/Item/Item";

import allproducts from "../Components/Assets/all_product";
const ShopCategory = (props) => {
  return (
    <div className="shopcategory">
      <div className="shopcategory-indexSort">
        <p>
          <span>Products</span>{" "}
        </p>
      </div>
      <div className="shopcategory-products">
        {allproducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                id={item.id}
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
