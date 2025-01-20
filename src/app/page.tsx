/**
 * @file page.tsx
 */
// Import components and utils
import { fetchBlocksBySlug } from "../lib/contentfulData";
import Content from "./content";

// Set metadata
export const metadata = {
  title: "Home | Example app",
  description: "This app uses NextJS and Contentful.",
};

export default async function Home() {
  const blocksEnglish = await fetchBlocksBySlug("home", "en-US");
  const blocksSpanish = await fetchBlocksBySlug("home", "es");

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
