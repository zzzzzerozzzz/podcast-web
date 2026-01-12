import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Zero to Growth",
        short_name: "Zero2Growth",
        description: "Your daily dose of growth and nurturing.",
        start_url: "/",
        display: "standalone",
        background_color: "#FAFAF5",
        theme_color: "#FAFAF5",
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
