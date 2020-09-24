import React from "react";
import { Link } from "react-router-dom";
import "./preview-collection.scss";
import CollectionItem from "../collection-item/collection-item.component";

const PreviewCollection = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <Link to={`/shop/${routeName}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
