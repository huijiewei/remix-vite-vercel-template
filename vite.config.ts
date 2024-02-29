import {vitePlugin as remix} from "@remix-run/dev";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {vercelServerlessPreset} from "@resolid/remix-plugins/vercel-serverless";

export default defineConfig({
    plugins: [remix({
        presets: [
            vercelServerlessPreset({
                regions: "iad1",
                cleanUrls: true,
                cacheFiles: ["favicon.svg", "apple-touch-icon.png", "manifest.webmanifest"],
                cacheFolders: ["icons", "images"],
            })
        ]
    }), tsconfigPaths()],
});
