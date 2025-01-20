const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;
const graphqlUrl = `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}?access_token=${accessToken}`;
import { notFound } from "next/navigation";

async function fetchGraphQL(
  query: string,
  variables: Record<string, any> = {}
) {
  const response = await fetch(graphqlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const jsonResponse = await response.json();

  if (jsonResponse.errors) {
    console.error("GraphQL errors:", jsonResponse.errors);
    throw new Error("Failed to fetch GraphQL data");
  }

  return jsonResponse.data;
}

export async function fetchPage(id: string, locale: string) {
  const query = `
    query($id: String!, $locale: String!) {
      page(id: $id, locale: $locale) {
        sys {
          id
        }
        fields {
          englishTitle
          spanishTitle
          slug
          order
          childPages
          topLevelPage
        }
      }
    }
  `;

  const variables = { id, locale };
  const data = await fetchGraphQL(query, variables);

  if (data.page) return data.page;

  console.log(`Error getting page.`);
}

export async function fetchPages() {
  const query = `
    query {
      pageCollection {
        items {
          sys {
            id
          }
          fields {
            englishTitle
            spanishTitle
            slug
            order
            childPages
            topLevelPage
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);

  if (!data || data.pageCollection.items.length === 0) {
    console.log("Error finding entries with content type: page");
    return [];
  }

  const pages = data.pageCollection.items.map((entry: any) => ({
    id: entry.sys.id,
    englishTitle: entry.fields.englishTitle,
    spanishTitle: entry.fields.spanishTitle,
    slug: entry.fields.slug,
    order: entry.fields.order,
    childPages: entry.fields.childPages,
    topLevelPage: entry.fields.topLevelPage,
  }));

  return pages;
}

export async function fetchMetadataBySlug(slug: string) {
  console.log(`Fetching metadata for slug ${slug}...`);

  const query = `
    query($slug: String!) {
      pageCollection(where: { slug: $slug }, limit: 1) {
        items {
          sys {
            id
          }
          fields {
            englishTitle
            spanishTitle
            slug
            order
            childPages
            topLevelPage
          }
        }
      }
    }
  `;

  const variables = { slug };
  const data = await fetchGraphQL(query, variables);

  if (!data || data.pageCollection.items.length === 0) {
    console.log("Error finding page with slug:", slug);
    return null;
  }

  return data.pageCollection.items[0];
}

export async function fetchBlocksBySlug(slug: string, locale: string) {
  const query = `
    query($slug: String!) {
      pageCollection(where: { slug: $slug }, limit: 1) {
        items {
          blocksCollection {
            items {
              __typename
              ...CallToActionBlockFields
              ...DividerTextBlockFields
              ...ExampleBlockFields
              ...HeadingFields
              ...HeroBlockFields
              ...ImageAndTextBlockFields
              ...ImageGridFields
              ...ImageSlidesBlockFields
              ...FeatureSelectionFields
              ...ServicesOverviewFields
              ...BeforeAfterImageFields
            }
          }
        }
      }
    }

    fragment CallToActionBlockFields on CallToActionBlock {
      _id
      heading
      subheading
      buttonText
      buttonLink
    }

    fragment DividerTextBlockFields on DividerTextBlock {
      _id
      text
    }

    fragment ExampleBlockFields on ExampleBlock {
      _id
      example
    }

    fragment HeadingFields on Heading {
      _id
      headingText
    }

    fragment HeroBlockFields on HeroBlock {
      _id
      image {
        title
        description
        url
      }
      heading
      buttonText
      buttonLink
    }

    fragment ImageAndTextBlockFields on ImageAndTextBlock {
      _id
      heading
      imageOnLeft
      descriptionRich {
        json
      }
      image {
        title
        description
        url
        width
        height
      }
    }

    fragment ImageGridFields on ImageGrid {
      _id
      imageGridName
      textCallout
    }

    fragment ImageSlidesBlockFields on ImageSlidesBlock {
      _id
    }

    fragment FeatureSelectionFields on FeatureSelection {
      image {
        title
        description
        url
        width
        height
      }
      heading
      subtext
      featureList {
        json
      }
    }

    fragment ServicesOverviewFields on ServicesOverview {
      image {
        title
        description
        url
        width
        height
      }
      heading
      subtext
      serviceList {
        json
      }
    }
    fragment BeforeAfterImageFields on BeforeAfterImage {
      beforeImage {
        title
        description
        url
        width
        height
      }
      afterImage {
        title
        description
        url
        width
        height
      }
    }
  `;

  const variables = { slug };
  const data = await fetchGraphQL(query, variables);

  if (!data || data.pageCollection.items.length === 0) {
    console.log(`Error finding pages with slug: ${slug}`);
    notFound();
  }

  // Retrieve blocks from the first result
  if (data.pageCollection.items[0]) {
    const blocks = data.pageCollection.items[0].blocksCollection.items;
    return blocks;
  }
}

export async function fetchAsset(assetID: string) {
  const query = `
        query($assetID: String!) {
          asset(id: $assetID) {
            sys {
              id
            }
            fields {
              title
              description
              file {
                url
                fileName
                contentType
              }
            }
          }
        }
      `;

  const variables = { assetID };
  const data = await fetchGraphQL(query, variables);

  if (data.asset) return data.asset;

  console.log("Error getting asset.");
}
