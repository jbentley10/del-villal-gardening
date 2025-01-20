import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { renderDocument } from "@/lib/renderDocument";

export interface ServicesOverviewProps {
  image: {
    title: string;
    description: string;
    url: string;
    width: number;
    height: number;
  };
  heading: string;
  subtext: string;
  serviceList: {
    json: {};
  };
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  image,
  heading,
  subtext,
  serviceList,
}) => {
  return (
    <section className="py-16 bg-del-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <Image
              src={image.url}
              alt={image.description}
              width={image.width}
              height={image.height}
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl font-bold text-del-green-800 mb-4">
              {heading}
            </h2>
            <p className="text-lg text-gray-600 mb-6">{subtext}</p>
            <div></div>
            {renderDocument(serviceList.json)}
          </div>
          <Link href="/services">
            <Button className="bg-del-green-600 hover:bg-del-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
