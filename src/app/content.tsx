/**
 * @file content.tsx
 */
"use client";

// Component that's called from inside page.js
// All it does is look at each content block,
// and assign it the appropriate React component(s)

// Import components
import { Hero } from "@/components/hero";
import { DividerText } from "@/components/divider-text";
import { CallToAction } from "@/components/call-to-action";
import { Heading } from "@/components/heading";
import { ImageTextBlock } from "@/components/image-text-block";
import { ImageCards } from "@/components/image-cards";
import { FeatureSelection } from "@/components/feature-selection";
import { ServicesOverview } from "@/components/services-overview";
import BeforeAfterSlider from "@/components/before-after-slider";

const blockByType = (block: any) => {
  // Get the content type from the block content properties
  const contentType = block.__typename;

  switch (contentType) {
    case "HeroBlock":
      return (
        <Hero
          image={block.image}
          heading={block.heading}
          buttonLink={block.buttonLink}
          buttonText={block.buttonText}
        />
      );

    case "DividerTextBlock":
      return <DividerText text={block.text} />;

    case "CallToActionBlock":
      return (
        <CallToAction
          heading={block.heading}
          subheading={block.subheading}
          buttonText={block.buttonText}
          buttonLink={block.buttonLink}
        />
      );

    case "Heading":
      return <Heading heading={block.headingText} />;

    case "ImageAndTextBlock":
      return (
        <ImageTextBlock
          heading={block.heading}
          image={block.image}
          subtext={block.descriptionRich}
          imageOnLeft={block.imageOnLeft}
        />
      );

    case "ImageCards":
      console.log(block);
      return <ImageCards cards={block.imageCardsCollection.items} />;

    case "FeatureSelection":
      return (
        <FeatureSelection
          image={block.image}
          heading={block.heading}
          subtext={block.subtext}
          featureList={block.featureList}
        />
      );

    case "ServicesOverview":
      return (
        <ServicesOverview
          image={block.image}
          heading={block.heading}
          subtext={block.subtext}
          serviceList={block.serviceList}
        />
      );

    case "BeforeAfterImage":
      return (
        <BeforeAfterSlider
        beforeImage={block.beforeImage}
        afterImage={block.afterImage}
        />
      )
  }
};

interface ContentProps {
  englishBlocks: [];
  spanishBlocks: [];
}

// Component recieves a single array of block objects
export default function Content({
  englishBlocks,
  spanishBlocks,
}: ContentProps) {
  return (
    englishBlocks &&
    englishBlocks.map((block: any) => {
      return blockByType(block);
    })
  );
}
