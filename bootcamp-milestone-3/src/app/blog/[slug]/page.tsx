import Image from "next/image";
import { notFound } from "next/navigation";
import blogs from "../../blogData";

type Params = { slug: string };

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;              // <-- unwrap the promise
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return notFound();

  return (
    <main style={{ maxWidth: 900, margin: "32px auto", padding: "0 16px" }}>
      <h1 style={{ marginBottom: 8 }}>{post.title}</h1>
      <time dateTime={post.date} style={{ opacity: 0.7 }}>
        {new Date(post.date).toLocaleDateString()}
      </time>

      <div style={{ marginTop: 16 }}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          width={1200}
          height={675}
          style={{ width: "100%", height: "auto", borderRadius: 8 }}
          priority
        />
      </div>

      <p style={{ marginTop: 16, fontSize: 18, lineHeight: 1.6 }}>
        {post.description}
      </p>
      <article style={{ marginTop: 16, lineHeight: 1.8, fontSize: 18 }}>
  {post.content
    .split(/\n\s*\n/) // split on blank lines
    .map((para, i) => (
      <p key={i} style={{ margin: "0 0 1rem" }}>{para}</p>
    ))}
</article>
    </main>
  );
}


//Metadata
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;              // <-- unwrap
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return { title: "Blog post not found" };
  return {
    title: `${post.title} • Vincent Le`,
    description: post.description,
    
    
  };
}
