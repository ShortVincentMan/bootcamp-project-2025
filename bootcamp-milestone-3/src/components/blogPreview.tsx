import Image from "next/image";
import type { Blog } from "../app/blogData";
import Link from "next/link";
import style from "./blogPreview.module.css";

export default function BlogPreview(props: Blog) {
  return (
    <article className={style.card}>
      <Link href={`/blog/${props.slug}`} aria-label={`Read: ${props.title}`} className={style.cardLink}>
        <div className={style.thumb}>
          <Image
            src={props.image}
            alt={props.imageAlt}
            width={640}
            height={360}
          />
        </div>

        <h3 className={style.title}>{props.title}</h3>
        <p className={style.desc}>{props.description}</p>
        <time className={style.date} dateTime={props.date}>
          {new Date(props.date).toLocaleDateString()}
        </time>
      </Link>
    </article>
  );
}
