import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./preview-collection.styles";

const PreviewCollection = ({ title, items, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <Link to={`/shop/${routeName}`}>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
      </Link>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default PreviewCollection;
