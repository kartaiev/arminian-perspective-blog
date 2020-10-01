import imageUrlBuilder from "@sanity/image-url";
import client from "./client";

export const urlFor = (source) => {
  return imageUrlBuilder(client).image(source);
};

export const handleScroll = (func) => {
  const windowHeight =
    "innerHeight" in window
      ? window.innerHeight
      : document.documentElement.offsetHeight;
  const body = document.body;
  const html = document.documentElement;
  const docHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  const windowBottom = windowHeight + window.pageYOffset;
  if (windowBottom >= docHeight - 5) {
    console.log("bottom");
    func();
  }
};
