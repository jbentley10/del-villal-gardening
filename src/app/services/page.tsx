/**
 * @file page.tsx
 */
// Import components and utils
import Head from "next/head";
import { fetchBlocksBySlug } from "../../lib/contentfulData";
import Content from "../content";

// Set metadata
export const metadata = {
  title: "Services | Del Villal Gardening",
  description: "Local gardener near Palm Springs offering professional garden maintenance, landscape design, and commercial services. Licensed and insured team serving Palm Springs area.",
};

export default async function Services() {
  const blocksEnglish = await fetchBlocksBySlug("services", "en-US");
  const blocksSpanish = await fetchBlocksBySlug("services", "es");

  // Wait for the promises to resolve
  const [english, spanish] = await Promise.all([blocksEnglish, blocksSpanish]);

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://delvillalgardening.com/services"
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
    </>
  );
}
