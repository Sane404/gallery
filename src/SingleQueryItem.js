import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./SingleQueryItem.css";
const SingleQueryItem = () => {
  const API_KEY = "19270976-52a948baffb8c387b7c0b57b3";
  const { name } = useParams();
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${name}+city&image_type=photo&per_page=200`;
  const [images, setImages] = useState([]);
  const [moreImages, setMoreImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(20);
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setImages(data.hits);
        setMoreImages(data.hits.slice(0, amount));
        setIsLoading(false);
      });
  }, [name, amount, url]);
  useEffect(() => {
    setMoreImages(images.slice(0, amount));
  }, [amount, images]);
  if (isLoading) {
    return <div className="isLoading">Loading...</div>;
  }
  return (
    <div className="gallery_wrap">
      <div className="single-query">
        {moreImages.map((item) => {
          const { id, webformatURL, largeImageURL, tags } = item;
          const parsed_url = largeImageURL.split("/")[4];
          return (
            <div className="card" key={id}>
              <img src={webformatURL} alt={tags} />
              <div className="hidden_button">
                <Link to={`/full_image/${parsed_url}`}>See full picture</Link>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setAmount(amount + 20)}
        className={`${
          amount >= images.length ? "show_more hidden" : "show_more"
        }`}
      >
        Show more
      </button>
    </div>
  );
};

export default SingleQueryItem;
