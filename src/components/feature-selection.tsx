import { renderDocument } from "@/lib/renderDocument";
import Image from "next/image";

export interface FeatureSelectionProps {
  image: {
    title: string;
    description: string;
    url: string;
    width: number;
    height: number
  };
  heading: string;
  subtext: string;
  featureList: {
    json: {}
  }
}

export const FeatureSelection: React.FC<FeatureSelectionProps> = ({
  image,
  heading,
  subtext,
  featureList
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
                    src={image.url}
                    width={image.width}
                    height={image.height}
                    alt={image.description}
                    className={`rounded-lg shadow-lg`}
                  />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-del-green-800 mb-4">
              {heading}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {subtext}
            </p>
            <div>{renderDocument(featureList.json)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
