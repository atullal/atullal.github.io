import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { GitHubCard } from "@/app/_components/github-card";
import Link from "next/link";
import Image from "next/image";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  const getRepoPath = (url: any) => {
    const githubUrl = new URL(url);
    const path = githubUrl.pathname.slice(1).split('/');
    return `${path[0]}/${path[1]}`;
  };

  const fetchRepoData = async (repoUrl: string) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${getRepoPath(repoUrl)}`);
      const repoData = await response.json();
      return repoData;
    } catch (error) {
      console.error('Error fetching repository data:', error);
      return null;
    }
  };

  return (
    <main>
      <Alert />
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          {post.github ? <GitHubCard repoData={await fetchRepoData(post.github)} /> : null}

          <div className="max-w-2xl mx-auto">
            <PostBody content={content} />
          </div>
        <div className="max-w-2xl mx-auto mt-12 rounded-2xl bg-neutral-500 px-8 py-8 text-white">
          <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
            <div className="relative mt-1 h-150 w-150 flex-shrink-0 text-align-center">
              <a href="/about">
              <Image
                src={'/assets/blog/authors/atullal_large.png'}
                alt={`Image of Atul Lal`}
                className="rounded-full object-cover"
                width={150}
                height={150}
              />
              </a>
            </div>
            <div>
              <div className="mb-3">
                <h3 className="text-lg font-medium text-white">About Atul Lal</h3>
              </div>
              <div>
                <p>I am a software engineer with a passion for creating innovative and impactful applications that solve real-world problems. At Commvault Systems, I optimized APIs, developed distributed systems, and automated cloud environments for over two years.</p>
              </div>
              <div className="mt-3">
                <a className="bg-brand-secondary/20 rounded-full py-2 text-sm text-neutral-50" href="/about">View Profile</a>
              </div>
            </div>
          </div>
        </div>
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Atul's Blog`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
