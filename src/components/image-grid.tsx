import Image from "next/image";
import React from "react";

export interface ContentfulImage {
  title: string;
  description: string;
  url: string;
  width: number;
  height: number;
}

export function ImageGrid(props: {
  images: Array<ContentfulImage>;
  textCallout?: string;
  subtext?: string;
}) {
  let modifiedImages = [];

  console.log(props.images);

  for (let i = 0; i < props.images.length; i++) {
    let { title, description, url, width, height } = props.images[i];

    modifiedImages.push({
      title: title,
      url: url,
      description: description,
      width: width,
      height: height,
    });
  }

  return (
    <div className={"component-container flex flex-row gap-4 items-stretch"}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(1, 1fr)",
          gridGap: "22px",
        }}
      >
        <div
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(1, 1fr)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
              gridTemplateRows: "repeat(6, 1fr)",
            }}
          >
            <Image
              src={`https:${modifiedImages[0].url}`}
              width={modifiedImages[0].width}
              height={modifiedImages[0].height}
              alt={modifiedImages[0].description}
              loading={"lazy"}
              style={{ gridRow: "span 3", gridColumn: "span 3" }}
            />
            <Image
              src={`https:${modifiedImages[1].url}`}
              width={modifiedImages[1].width}
              height={modifiedImages[1].height}
              alt={modifiedImages[1].description}
              loading={"lazy"}
              style={{ gridRow: "span 3", gridColumn: "span 5" }}
            />
            <Image
              src={`https:${modifiedImages[4].url}`}
              width={modifiedImages[4].width}
              height={modifiedImages[4].height}
              alt={modifiedImages[4].description}
              loading={"lazy"}
              style={{ gridRow: "span 3", gridColumn: "span 5" }}
            />
            <Image
              src={`https:${modifiedImages[3].url}`}
              width={modifiedImages[3].width}
              height={modifiedImages[3].height}
              alt={modifiedImages[3].description}
              loading={"lazy"}
              style={{ gridRow: "span 3", gridColumn: "span 3" }}
            />
            <div style={{ gridRow: "span 2", gridColumn: "span 8" }}>
              <h4 className={"text-primary text-3xl md:text-5xl"}>
                {props.textCallout}
              </h4>
              <p>{props.subtext}</p>
            </div>
          </div>
        </div>
        <Image
          src={`https:${modifiedImages[2].url}`}
          width={modifiedImages[2].width}
          height={modifiedImages[2].height}
          alt={modifiedImages[2].title}
          loading={"lazy"}
          style={{ gridRow: "span 1", gridColumn: "span 1" }}
        />
      </div>
    </div>
  );
}