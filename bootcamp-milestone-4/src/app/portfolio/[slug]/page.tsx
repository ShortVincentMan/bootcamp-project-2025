import Image from "next/image";
import styles from "./project.module.css";
import { getProjectsbySlug, getProjects } from "@/database/projectSchema";
import Comment from "@/components/comment/comment";
import CommentForm from "@/components/comment/commentForm";

type Params = Promise<{ slug: string }>;

export default async function ProjectPost({ params }: { params: { slug: string } }) {
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
            {new Date(project.date).toLocaleDateString('en-US', {
              year: 'numeric', 
              month: 'long', 
              day: 'numeric'
              })  
            }
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
          {project.section?.length > 0 ? (
            project.section.map((section, index) => (
              <section key={index} className={styles.projectSection}>
                <h2>{section.heading}</h2>

                {section.image && (
                  <div className={styles.sectionImageWrapper}>
                  <Image
                  src={section.image}
                  alt={section.imageAlt || section.heading}
                  width={600}
                  height={400}
                  className={styles.sectionImage}
                  />
                  </div>
                )}
                <p>{section.content}</p>
              </section>
            ))
          ) : (
            <p>No sections found</p>
          )}
        </div>
        <footer className={styles.projectFooter}>
          <p>Written by Vincent Le</p>
        </footer>
      </article>
      {/* Comment Section*/}
      <div className={styles.commentsSection}>
        <h2 >Comments ({project.comments?.length || 0}) </h2>
        {Array.isArray(project.comments) && project.comments.length > 0 ? (
          <div className={styles.commentsList}>
            {project.comments.map((comment, index) => {
              return(
                <Comment key={index} comment={comment} />
              )
            })}
          </div>
        ) : (
          <p className={styles.noComments}>It's empty here... Please comment!</p>
          )}
        <h3>Add a Comment</h3>
        <CommentForm slug={project.slug} apiPath="portfolio"/>
      </div>
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

