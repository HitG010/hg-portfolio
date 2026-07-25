// Posts are plain .mdx files in src/content/blog — no CMS, no backend.
//
// This glob is eager because frontmatter and content live in the same module,
// so the index cannot know a post's title without loading it. That is fine at
// this scale: the whole blog sits behind a lazy route, so nothing here is
// fetched until someone visits /blog. Past roughly thirty posts, split the
// metadata into a build-time manifest instead.
const modules = import.meta.glob("/src/content/blog/*.mdx", { eager: true });

const toSlug = (path) => path.split("/").pop().replace(/\.mdx$/, "");

export const posts = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: toSlug(path),
    Content: mod.default,
    ...mod.meta,
  }))
  // `draft: true` keeps a post in the repo but off the site.
  .filter((post) => !post.draft)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPost = (slug) => posts.find((post) => post.slug === slug);

export const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
