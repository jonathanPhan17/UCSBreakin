import React from "react";
import { Image } from "antd";

const Gallery = () => {
  return (
    <Image.PreviewGroup>
      <Image width={200} src="/src/static/carousel-1.jpg" />
      <Image width={200} src="/src/static/carousel-2.jpg" />
      <Image width={200} src="/src/static/carousel-3.jpg" />
    </Image.PreviewGroup>
  );
};

export default Gallery;
