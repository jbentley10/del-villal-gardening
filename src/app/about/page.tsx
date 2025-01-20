/**
 * @file page.tsx
 */
// Import components and utils
import { fetchBlocksBySlug } from "../../lib/contentfulData";
import Content from "../content";

// Set metadata
export const metadata = {
  title: "About | Del Villal Gardening",
  description: "Family-owned landscaping company with over 3 years of experience. Meet our dedicated team of garden and landscape professionals committed to transforming outdoor spaces.",
};

export default async function About() {
  const blocksEnglish = await fetchBlocksBySlug("about", "en-US");
  const blocksSpanish = await fetchBlocksBySlug("about", "es");

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
