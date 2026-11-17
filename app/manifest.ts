import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "港人北上媒体矩阵",
        short_name: "北上媒体矩阵",
        description: "深圳·大湾区商家触达香港消费者的最直接渠道。",
        start_url: "/",
        display: "standalone",
        background_color: "#0f2b5b",
        theme_color: "#0f2b5b",
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
