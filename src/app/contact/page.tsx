/**
 * @file page.tsx
 */
// Import components and utils
import { fetchBlocksBySlug } from "../../lib/contentfulData";
import Content from "../content";

// Set metadata
export const metadata = {
  title: "Contact | Del Villal Gardening",
  description: "Ready to transform your outdoor space? Get a free estimate for landscaping, garden maintenance, or commercial services. Call us today or fill out our easy contact form.",
};

export default async function Contact() {
  const blocksEnglish = await fetchBlocksBySlug("contact", "en-US");
  const blocksSpanish = await fetchBlocksBySlug("contact", "es");

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
