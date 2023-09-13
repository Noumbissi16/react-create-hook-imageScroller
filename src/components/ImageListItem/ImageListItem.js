import React from "react";
import "./ImageListItem.css";
import { saveAs } from "file-saver";

function ImageListItem({ image }) {
  async function downloadImage() {
    const imageResponse = await fetch(image.download_url);
    const imageBlob = await imageResponse.blob();
    saveAs(imageBlob, image.author + "_" + image.id);
  }
  return (
    <div className="card">
      <a href={image.url}>
        <img src={image.download_url} className="img" alt={image.author} />
      </a>
      <div className="card_banner">
        <img
          src={image.download_url}
          className="card_thumb"
          alt={image.author}
        />
        <div className="card_text">
          <h3 className="card_title">{image.author}</h3>
          <div className="card_subtitle">
            Original size : {image.height} x {image.width}
          </div>
          <button onClick={downloadImage} className="btn">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageListItem;
