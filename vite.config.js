import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

// Highlighting runs here, at build time, so the generated markup already
// carries its colours and no highlighter ships to the browser.
const prettyCodeOptions = {
  theme: { dark: "github-dark-dimmed", light: "github-light" },
  keepBackground: false,
};

export default defineConfig({
  plugins: [
    // Must run before the React plugin so it receives compiled JSX.
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: "meta" }],
          remarkGfm,
        ],
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      }),
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
  server: {
    port: 3000,
    open: true,
  },
});
