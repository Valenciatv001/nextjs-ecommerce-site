import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    "projectId": "fb5q6dqg",
    "dataset": "production",
    apiVersion:"2021-10-21",
    useCdn:true,
    token:process.env.NEXT_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);