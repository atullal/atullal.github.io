import React from 'react';
import Head from 'next/head';
import Header from '../_components/header';
import Container from '../_components/container';

const ResumePage: React.FC = () => {
  return (

<main>
<Container>
  <Header />
  <div className="max-w-3xl mx-auto px-4 py-8">
      <Head>
        <title>Atul Lal - Resume</title>
        <meta name="description" content="Atul Lal's Resume" />
      </Head>
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Atul Lal</h1>
        <p className="text-lg text-gray-700">atul.lal123@gmail.com | Boston, MA</p>
        <div className="flex justify-center mt-4">
          <a href="https://github.com/atullal" target="_blank" rel="noopener noreferrer" className="mr-4 text-blue-600 hover:underline">github.com/atullal</a>
          <a href="https://linkedin.com/in/atullal123" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/atullal123</a>
        </div>
      </header>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
        <ul className="list-disc list-inside">
          <li>Programming Languages: Go, Rust, C++, Python, Java, TypeScript, C#, Ruby, Scala, .NET Core</li>
          <li>Cloud and Networking: AWS, Azure, GCP, Networking Fundamentals, Cloud Architecture, SQS</li>
          <li>Systems: Kafka, Redis, Hadoop, Spark, Microservices Architecture, gRPC, Flink, Terraform, Kubernetes</li>
          <li>Tools & Database: Git, Docker, MongoDB, SQL Server, DynamoDB, CosmosDB, NoSQL, Postgres</li>
          <li>Full Stack: HTML5, CSS3, JavaScript, React, Angular, Node.js, REST API, GraphQL, MVC Architecture</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Professional Experience</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Commvault Systems, Bangalore, India</h3>
          <p className="text-gray-700">Software Engineer | July 2020 – August 2022</p>
          <ul className="list-disc list-inside">
            <li>Improved user experience by...</li>
            <li>Achieved a 50% reduction in disk space usage and 2x faster alert delivery by...</li>
            <li>Engineered a Kafka and Redis-based alert microservice using Go for Commvault’s Metallic SaaS...</li>
          </ul>
        </div>
        {/* Additional experiences go here */}
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Boston University, Graduate School of Arts and Sciences, USA</h3>
          <p className="text-gray-700">Master of Science in Computer Science | September 2022 - January 2024</p>
          <p>GPA – 3.91/4.00</p>
          <ul className="list-disc list-inside">
            <li>Teaching Assistant, DS 310 Data Mechanics: Focused on...</li>
            <li>Relevant Coursework: Distributed Systems, Stream Processing Systems, Graduate Computer Networks...</li>
          </ul>
        </div>
        {/* Additional education goes here */}
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Academic Projects</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Causal Profiling in Microservice Environment</h3>
          <p>Authored research paper focusing on causal profiling and what-if analysis of microservice architectures...</p>
        </div>
        {/* Additional projects go here */}
      </section>
    </div>

</Container>
</main>
  );
};

export default ResumePage;
