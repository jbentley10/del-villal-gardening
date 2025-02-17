/**
 * @file page.tsx
 */
// Import components and utils
import Head from "next/head";
import { fetchBlocksBySlug } from "../../lib/contentfulData";
import Content from "../content";

// Set metadata
export const metadata = {
  title: "About | Del Villal Gardening",
  description: "Professional gardener near Palm Springs with a decade of expertise. Family-owned team delivering custom landscape design and garden maintenance services across the Coachella Valley. Transform your outdoor space.",
};

export default async function About() {
  const blocksEnglish = await fetchBlocksBySlug("about", "en-US");
  const blocksSpanish = await fetchBlocksBySlug("about", "es");

  // Wait for the promises to resolve
  const [english, spanish] = await Promise.all([blocksEnglish, blocksSpanish]);

  return (
    <div>
      <Head>
        <link
          rel="canonical"
          href="https://delvillalgardening.com/about"
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
