import { renderDocument } from "../lib/renderDocument";
import Image from "next/image";
import React from "react";

export interface ImageTextBlockProps {
  heading: string;
  descriptionRich: {
    json: {}
  };
  image: {
    title: string;
    description: string;
    url: string;
    width: number;
    height: number;
  };
  imageOnLeft: boolean;
}

export const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  descriptionRich,
  heading,
  image,
  imageOnLeft,
}) => {
  return (
    <section
      id={heading}
      className={`component-container component-spacer flex ${
        imageOnLeft === true
          ? "flex-col md:flex-row"
          : "flex-col-reverse md:flex-row-reverse"
      } items-center text-primary`}
    >
      <Image
        src={image.url}
        width={image.width}
        height={image.height}
        alt={image.description}
        className={`${
          imageOnLeft === true ? "md:mr-24 md:w-1/2" : "md:ml-24 md:w-1/2"
        }`}
      />
      <div className={"md:w-1/2"}>
        <h2 className={"pt-8 pb-6"}>{heading}</h2>
        <div>{renderDocument(descriptionRich.json)}</div>
      </div>
    </section>
  );
};
