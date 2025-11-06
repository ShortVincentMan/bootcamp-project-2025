import Image from "next/image";
import Link from "next/link";

export type BlogPreviewProps = {
  title: string;
  slug: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  content: string;
};

export default function BlogPreview(props: BlogPreviewProps) {
  return (
    <article>
      <Link href={`/blog/${props.slug}`} aria-label={`Read: ${props.title}`}>
        <div>
          <Image
            src={props.image}
            alt={props.imageAlt}
            width={640}
            height={360}
          />
        </div>

        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <time dateTime={props.date}>
          {new Date(props.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
        </time>
      </Link>
    </article>
  );
}