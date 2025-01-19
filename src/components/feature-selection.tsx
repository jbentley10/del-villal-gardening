import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            {/* <Image
              src=""
              alt="Row of potted cacti along a wall"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            /> */}
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-del-green-800 mb-4">
              Desert-Friendly Landscaping Experts
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Del Villal Gardening, we specialize in creating stunning,
              water-wise landscapes that thrive in the unique desert
              environment. Our expert team combines local plant knowledge with
              innovative design techniques to transform your outdoor space into
              a sustainable oasis.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Drought-resistant plant selection</li>
              <li>Efficient irrigation systems</li>
              <li>Xeriscape design and implementation</li>
              <li>Native desert flora integration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
