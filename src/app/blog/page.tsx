import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import  Header from "@/app/_components/header";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Header />
        {allPosts.length > 0 && <MoreStories title={false} posts={allPosts} />}
      </Container>
    </main>
  );
}
