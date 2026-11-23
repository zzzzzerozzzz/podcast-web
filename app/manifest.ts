import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "港人北上媒體矩陣",
        short_name: "北上媒體矩陣",
        description: "深圳·大灣區商家觸達香港消費者的最直接渠道。",
        start_url: "/",
        display: "standalone",
        background_color: "#FAF7F2",
        theme_color: "#2C3E26",
        icons: [
            {
                src: "/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
