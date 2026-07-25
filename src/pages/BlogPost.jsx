import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import Container from "../components/Container";
import NotFound from "../components/NotFound";
import ReadingProgress from "../components/ReadingProgress";
import { getPost, formatDate } from "../data/posts";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);
  const articleRef = useRef(null);

  useDocumentTitle(post?.title);

  if (!post) {
    return (
      <NotFound
        title="Post not found"
        message="There is no post at this address. It may have been renamed, or is still a draft."
        actionTo="/blog"
        actionLabel="Back to writing"
      />
    );
  }

  const { Content } = post;

  return (
    <>
      <ReadingProgress targetRef={articleRef} />
      <Container size="narrow" className="pb-24 pt-28 md:pt-32">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-secondary transition-colors hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none"
        >
          <FaChevronLeft aria-hidden="true" /> All writing
        </Link>

        <article ref={articleRef} className="mt-8">
          <header className="border-b border-border pb-8">
            <div className="flex items-center gap-3 text-sm text-secondary">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.readingTime && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </>
              )}
            </div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight">
              {post.title}
            </h1>
            {post.summary && (
              <p className="mt-4 text-lg text-secondary">{post.summary}</p>
            )}
          </header>

          {/* prose-invert is driven by the theme class on <html>, so the
              article follows light/dark with the rest of the site. */}
          <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-border prose-pre:bg-surface">
            <Content />
          </div>
        </article>
      </Container>
    </>
  );
};

export default BlogPost;
