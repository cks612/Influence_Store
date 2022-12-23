import Image from "next/image";
import React from "react";

const NewsImage = () => {
  return (
    <Image
      src="/images/News/newsImage.png"
      width={150}
      height={150}
      alt="newsImage"
      priority
    />
  );
};

export default NewsImage;
