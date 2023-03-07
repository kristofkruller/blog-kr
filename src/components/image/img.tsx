import Image from "next/image";
import { Img } from "blog";
import { FC } from "react";

interface ImgProps {
  image: Img
}

const Img: FC<ImgProps> = ({ image }) => {
  const { alternativeText, width, height } = image.data.attributes && image.data.attributes;

  return (
    <Image
      width={width}
      height={height}
      src={""}
      alt={alternativeText || ""}
      // placeholder="blur"
      // blurDataURL=""
    />
  );
};

export default Img;