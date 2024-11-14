import { env } from "node:process";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { devServer } from "@resolid/remix-plugins/dev-server";
import { nodePreset } from "@resolid/remix-plugins/node-preset";
import { vercelPreset } from "@resolid/remix-plugins/vercel-preset";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals({ nativeFetch: true });

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    devServer({
      entryFile: "server.node.ts",
    }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
        unstable_optimizeDeps: true,
      },
      presets: [
        env.VERCEL == "1"
          ? vercelPreset({
              regions: "iad1",
              entryFile: "server.vercel.ts",
            })
          : nodePreset({
              entryFile: "server.node.ts",
            }),
      ],
    }),
    tsconfigPaths(),
  ],
});
