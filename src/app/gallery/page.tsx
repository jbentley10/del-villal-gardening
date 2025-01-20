/**
 * @file page.tsx
 */
// Import components and utils
import { fetchBlocksBySlug } from "../../lib/contentfulData";
import Content from "../content";

// Set metadata
export const metadata = {
  title: "Gallery | Del Villal Gardening",
  description: "Browse our portfolio of stunning landscape transformations. See real examples of our garden designs, outdoor lighting, and commercial landscaping projects across the Coachella valley.",
};

export default async function Gallery() {
  const blocksEnglish = await fetchBlocksBySlug("gallery", "en-US");
  const blocksSpanish = await fetchBlocksBySlug("gallery", "es");

  // Wait for the promises to resolve
  const [english, spanish] = await Promise.all([blocksEnglish, blocksSpanish]);

  return (
    <main>
      {english && spanish && (
        <Content
          key={Math.random()}
          englishBlocks={english}
          spanishBlocks={spanish}
        />
      )}
      ;
    </main>
  );
}
