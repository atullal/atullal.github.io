import React from 'react';
import Head from 'next/head';
import Header from '../_components/header';
import Container from '../_components/container';
import Contribution from '../_components/contribution';
import Cards from '../_components/cards';
import Image from "next/image";
import Interests from '../_components/interests';
const AboutPage: React.FC = () => {
  return (

    <main>
      <Container>
        <Header />
        <div className="max-w-3xl mx-auto px-4 py-8">
        <Head>
            <title>About Me</title>
            <meta name="description" content="Learn more about me and my interests." />
        </Head>
        <main>
          <div className="flex flex-col md:flex-row">
  {/* Image container */}
  <div className="w-full md:w-1/3 p-8 md:pl-0 flex justify-center items-center md:items-start">
    <Image
      src={'/assets/blog/authors/atullal_large.png'}
      alt={`Image of Atul Lal`}
      className="w-full md:max-w-xs h-auto object-cover"
      width={120}
      height={120}
    />
  </div>

  {/* Text container */}
  <div className="w-full md:w-2/3 pt-8">
    <h1 className="text-3xl font-bold mb-4">About Me</h1>
    <p className="text-lg text-gray-700 mb-8">
      Welcome to my site! I'm Atul Lal, a Software Engineer specializing in distributed systems and cloud computing, and a Boston University alum. At Commvault Systems, I fine-tuned APIs and scaled microservices—call me a code whisperer.
    </p>
  </div>
</div>




<Cards />
            <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Background</h2>
            <p className="text-lg text-gray-700">
            My adventure in technology started at Bennett University, where my love for solving complex problems was ignited. After earning my bachelor’s degree, I took the plunge into the professional world as a Software Engineer at Commvault Systems. For over two years, I was at the frontline of innovation, tackling challenges that pushed the boundaries of what our technology could achieve.<br/><br/>

Driven by a desire to delve deeper, I later pursued a Master's degree at Boston University. Here, I not only expanded my technical expertise but also embraced opportunities to lead and innovate, further shaping my approach to software development and system optimization. My tools? A whole lot of Go, Python, and a dash of C++.<br/><br/>

But there’s more to me than code and cloud solutions. Once the computers power down, my artistic side takes the stage. I’m a self-proclaimed jack of all trades, dabbling in everything from perfecting my cup of coffee to painting my sleepless nights’ wildest dreams. My passion for art extends to woodworking and painting denim jackets, each project a new expression of my creative spirit.<br/><br/>

I'm also a die-hard Real Madrid fan and a movie connoisseur—and critic! Each of these passions enriches my life, providing balance and inspiration in everything I do.<br/><br/>

Want to talk tech, art, or the latest blockbuster?
            </p>
            </section><br/>
        </main>

        <section>
            <h2 className="text-xl font-semibold mb-4">Contribution</h2>
            <p className="text-lg text-gray-700">Tossing my GitHub contribution graph up here to gently shame myself into coding more! 🌟💻 </p><br/>
        <Contribution />
            </section>
            <br/><br/>

            <section>
            <h2 className="text-xl font-semibold mb-4">Interests</h2>
            <p className="text-lg text-gray-700">Explore my interests in movies, music, and art. </p><br/>
        <Interests />
            </section>
        </div>
      </Container>
    </main>
  );
};

export default AboutPage;
