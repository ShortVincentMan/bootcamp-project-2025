import Image from "next/image";
import styles from "./project.module.css";
import { getProjectsbySlug, getProjects } from "@/database/projectSchema";
import { getBlogsBySlug } from "@/database/blogSchema";

const project = (await getProjects()) ?? [];

type Params = Promise<{ slug: string }>;

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  console.log("⛳ slug param:", slug);
  const project = await getProjectsbySlug(slug);
  console.log("📄 project found?", !!project);
  if (!project) {
    return(
      <div className={styles.projectContainer}>
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
      </div>
    );
  };

  return (
    <main className={styles.projectPostContainer}>
      <article className={styles.projectPost}>
        <header className={styles.projectHeader}>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <p className={styles.projectDate}>
            {new Date(project.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})  }
          </p>
          <Image
            alt=""
            width={800}
            height={400}
            src={project.image}
            className={styles.projectImage}
          />
        </header>

        <div className={styles.projectContent}>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>

        <footer className={styles.projectFooter}>
          <p>Written by Vincent Le</p>
        </footer>
      </article>
    </main>
  );
}


export async function generateStaticParams() {
  const projects = await getProjects();
  if (!projects) return [];
  return projects.map((project) => ({
    slug: project.slug,
  }));
} 

//Metadata for each post
export async function generateMetadata({ params }: { params: Params  }) {
  const { slug } = await params;
  const project = await getProjectsbySlug(slug);
  return project
    ? { title: `${project.title} • Vincent Le`, description: project.description }
    : { title: "Project Not Found" };
}

