/**
 * @file page.tsx
 */
// Import components and utils
import { fetchBlocksBySlug } from "../../lib/contentfulData";
import Content from "../content";

// Set metadata
export const metadata = {
  title: "Services | Del Villal Gardening",
  description: "Comprehensive landscaping services including garden maintenance, irrigation systems, tree care, and lighting installation. Commercial and residential solutions tailored to your needs.",
};

export default async function Services() {
  const blocksEnglish = await fetchBlocksBySlug("services", "en-US");
  const blocksSpanish = await fetchBlocksBySlug("services", "es");

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
