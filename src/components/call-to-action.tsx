import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { renderDocument } from "@/lib/renderDocument";

export interface CallToActionProps {
  heading: string;
  subheading?: string;
  optionalRichText?: { json: {}};
  buttonText: string;
  buttonLink: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  heading,
  subheading,
  optionalRichText,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className={
        "text-center component-container component-spacer flex flex-col items-center"
      }
    >
      <div className={"w-3/4 md:w-1/2"}>
        <h2 className={"text-primary pb-7"}>{heading}</h2>
        { subheading && <p className={"text-primary mb-20"}>{subheading}</p>}
      </div>
      {optionalRichText &&
        <div>{renderDocument(optionalRichText.json)}</div>
      }
      <Link href={buttonLink}>
        <Button size={"lg"} variant={"default"}>
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};
