/**
 * @file page.tsx
 */
// Import components and utils
import Head from "next/head";
import { fetchBlocksBySlug } from "../lib/contentfulData";
import Content from "./content";

// Set metadata
export const metadata = {
  title: "Home | Del Villal Gardening",
  description: "Professional landscaping and garden maintenance services for residential and commercial properties. From irrigation and lighting to tree care and regular upkeep. Licensed and insured.",
};

export default async function Home() {
  const blocksEnglish = await fetchBlocksBySlug("home", "en-US");
  const blocksSpanish = await fetchBlocksBySlug("home", "es");

  // Wait for the promises to resolve
  const [english, spanish] = await Promise.all([blocksEnglish, blocksSpanish]);

  return (
    <div>
      <Head>
        <link
          rel="canonical"
          href="https://delvillalgardening.com"
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
      ;
    </main>
    </div>
  );
}
