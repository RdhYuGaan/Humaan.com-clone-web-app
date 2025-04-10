import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
const samplePosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    tag: 'react',
    excerpt: 'Hooks are functions that let you use state and lifecycle features in functional components.',
  },
  {
    id: 2,
    title: 'Tailwind CSS Basics',
    tag: 'tailwind-css',
    excerpt: 'Tailwind is a utility-first CSS framework packed with classes for rapid UI development.',
  },
  {
    id: 3,
    title: 'Advanced React Patterns',
    tag: 'react',
    excerpt: 'Learn advanced patterns like render props, HOCs, and custom hooks to scale your app.',
  },
];

const Featured = () => {
  const { featured } = useParams();
  const formattedFeatured = featured?.replace(/-/g, ' ') || 'Unknown';

  // Filter posts using the featured param
  const filteredPosts = samplePosts.filter(post => post.tag === featured);

  return (
    <div>
        <Header />
      
    </div>
  );
};

export default Featured;
