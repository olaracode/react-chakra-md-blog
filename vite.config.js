import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import Markdown from "@pity/vite-plugin-react-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Markdown({
      wrapperComponentName: "ReactMarkdown",
      wrapperComponentPath: "./src/components/page",
      // if you want use components in md file, please add it in this
      // [ComponentName]: `componentPath`
      // 🐱‍🚀: the `ComponentName` must be `CamelCase`
      importComponentsPath: {
        ReactTest: "./src/assets/data/*.md",
      },
      // markdownItUses: [
      //   prism,
      // ],
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
