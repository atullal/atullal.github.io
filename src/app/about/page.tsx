import React from 'react';
import Head from 'next/head';
import Header from '../_components/header';
import Container from '../_components/container';
import Contribution from '../_components/contribution';
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
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-gray-700 mb-8">
            Welcome to my personal website! Here's a little bit about me...
            </p>
            <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Background</h2>
            <p className="text-lg text-gray-700">
                I'm a passionate developer who loves to create innovative solutions using cutting-edge technologies.
            </p>
            </section>
            <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Interests</h2>
            <p className="text-lg text-gray-700">
                My interests include web development, artificial intelligence, and gaming.
            </p>
            </section>
            <section>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-lg text-gray-700">You can reach out to me at example@example.com</p>
            </section>
        </main>
        <Contribution />
        </div>
      </Container>
    </main>
  );
};

export default AboutPage;
