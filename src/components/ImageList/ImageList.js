import React from "react";
import ImageListItem from "../ImageListItem/ImageListItem";
import "./ImageList.css";

function ImageList({ imageList }) {
  return imageList.map((image) => {
    return (
      <div key={image.id} className="card_item">
        <ImageListItem image={image} />
      </div>
    );
  });
}

export default ImageList;
