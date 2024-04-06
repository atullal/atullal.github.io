import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import  Header from "@/app/_components/header";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Blurs from "./blurs";
import Subscribe from "./_components/subscribe";

export default function Index() {
  const allPosts = getAllPosts();
  console.log(allPosts.map(post => post.slug));

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Blurs />
      <Container>
        <Header />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories title posts={morePosts} />}
        <Subscribe />
      </Container>
    </main>
  );
}
