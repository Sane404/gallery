import React from "react";
import { useParams } from "react-router-dom";
import "./SingleImage.css";
const SingleImage = () => {
  const { id } = useParams();
  const url = `https://pixabay.com/get/${id}.jpg`;
  return (
    <div className="large_image">
      <img src={url} alt="large" />
    </div>
  );
};

export default SingleImage;
