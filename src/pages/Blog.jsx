import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import { posts, formatDate } from "../data/posts";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Blog = () => {
  useDocumentTitle("Writing");

  return (
    <Container className="flex flex-col gap-12 pb-24 pt-28 md:pt-32">
      <header className="max-w-[60ch]">
        <Reveal as="h1" className="text-headline font-semibold">
          Writing
        </Reveal>
        <Reveal delay={0.08} as="p" className="mt-5 text-lg text-secondary">
          Notes on machine learning, systems and whatever I happen to be
          building.
        </Reveal>
      </header>

      {posts.length === 0 ? (
        <Reveal as="p" className="text-secondary">
          Nothing published yet.
        </Reveal>
      ) : (
        <ul className="flex flex-col">
          {posts.map((post, index) => (
            <Reveal as="li" key={post.slug} delay={index * 0.06}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 border-t border-border py-8 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none"
              >
                <div className="flex items-center gap-3 text-sm text-secondary">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  {post.readingTime && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{post.readingTime}</span>
                    </>
                  )}
                </div>

                <h2 className="flex items-start gap-2 text-2xl font-semibold transition-colors group-hover:text-accent motion-reduce:transition-none">
                  {post.title}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1.5 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                  />
                </h2>

                <p className="max-w-[68ch] text-secondary">{post.summary}</p>

                {post.tags?.length > 0 && (
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border px-2 py-0.5 text-xs text-secondary"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            </Reveal>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Blog;
