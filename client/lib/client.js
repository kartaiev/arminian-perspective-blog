import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "l0ve09ch",
  dataset: "production",
  useCdn: true,
});
