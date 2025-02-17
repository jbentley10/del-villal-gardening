/**
 * @file page.tsx
 */
// Import components and utils
import GalleryGrid from "@/components/gallery-grid";
import { fetchBlocksBySlug, fetchImages } from "../../lib/contentfulData";
import Content from "../content";
import Head from "next/head";

// Set metadata
export const metadata = {
  title: "Gallery | Del Villal Gardening",
  description: "Browse our portfolio of stunning landscape transformations. See real examples of our garden designs, outdoor lighting, and commercial landscaping projects across the Coachella valley.",
};

export default async function Gallery() {
  const blocksEnglish = await fetchBlocksBySlug("gallery", "en-US");
  const blocksSpanish = await fetchBlocksBySlug("gallery", "es");
  const images = await fetchImages(100);

  // Wait for the promises to resolve
  const [english, spanish] = await Promise.all([blocksEnglish, blocksSpanish]);

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://delvillalgardening.com/gallery"
          key="canonical"
        />
      </Head>
			<main>
				{english && spanish && (
					<Content
						key={Math.random()}
						englishBlocks={english}
						spanishBlocks={spanish}
					/>
				)}
				<GalleryGrid images={images} />
				;
			</main>
    </>
  );
}
