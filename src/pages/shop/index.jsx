import React, { Component } from "react";
import SHOP_DATA from "../../data/shopping.data";
import "./shop.scss";
import PreviewCollection from "../../components/preview-collection";

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...rest }) => (
          <PreviewCollection key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
