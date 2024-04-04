import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Container from '../_components/container';
import Header from '../_components/header';
import { PostTitle } from '../_components/post-title';
import { projects } from './data'; 

const ProjectsPage: React.FC = () => {
  return (

    <main>
      <Container>
        <Header />
        <PostTitle>Projects</PostTitle>
        <div className="max-w-5xl mx-auto px-4 py-8">
        {projects.map((project) => (
        <div key={project.id} className="rounded-lg shadow-md bg-white overflow-hidden mb-8">
          <div className="flex">
            <div className="flex-none w-56 relative">
              <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex-auto p-6 pl-8">
              <h1 className="text-lg font-semibold mb-2">{project.title}</h1>
              <p className="text-gray-700 mb-4">{project.description}</p>


              <div className="mb-4">
                <span className="font-semibold mr-2">Date:</span> {project.dateFrom} - {project.dateTo}
              </div>


              <div className="mb-4">
                <span className="font-semibold mr-2">Categories:</span>
                {project.categories.map((category, index) => (
                  <span key={index} className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded-full mr-2 mb-2">{category}</span>
                ))}
              </div>

              <div className="mb-4 pb-6 border-b border-slate-200">
                <span className="font-semibold mr-2">Technologies:</span>
                {project.technologies.map((tech, index) => (
                  <span key={index} className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-full mr-2 mb-2">{tech}</span>
                ))}
              </div>
              <div className="flex-auto flex space-x-4 ">
              {project.repoLink ? <Link
                  href={project.repoLink || '#'}
                >
                <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                  Check out GitHub
                </button>
                </Link> : null
}
              <Link
                  href={project.projectLink}
                >
                <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                  Article
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
      </Container>
    </main>

    
  );
};

export default ProjectsPage;
