import {vitePlugin as remix} from "@remix-run/dev";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import vercelServerlessBuild from "@resolid/remix-plugins/vercel-serverless";

export default defineConfig({
    plugins: [remix(), vercelServerlessBuild({
        // Remix App directory, the default is app which is the same as Remix
        appDir: "app",
        // Deployment area
        regions: "sin1",
        // Whether to use clean URL
        cleanUrls: true,
        // The files in the public directory that need to be cached will be cached for one day. By default, favicon.ico will be cached.
        cacheFiles: ["favicon.svg", "apple-touch-icon.png", "manifest.webmanifest"],
        // The folders in the public directory that need to be cached are cached for one year. By default, assets will be cached.
        cacheFolders: ["icons", "images"],
        // Vercel routing, Remix's Server Bundles feature is built in parallel, so the plug-in cannot correctly write the config file routing to Vercel's config file
        // You need to define the route yourself, path is the path of the route, dest is the function name of serverless, the rule is to add an underscore before serverBundleId
        serverRoutes: [
            {path: "admin", dest: "_admin"},
            {path: "", dest: "_site"},
        ],
    }), tsconfigPaths()],
});
