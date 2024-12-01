import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../Compound.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import compounds from '../compounds.json';

const CompoundDetails = () => {
  const { id } = useParams();
  const compound = compounds.find((c) => c.id.toString() === id);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (compound) {
      const markdownFile = `${process.env.PUBLIC_URL}/data/${compound.filename}`;

      fetch(markdownFile)
        .then((response) => {
          if (!response.ok) throw new Error('Markdown file not found');
          return response.text();
        })
        .then((text) => setContent(text))
        .catch((error) => setContent('# Content Not Found'));
    }
  }, [compound]);

  if (!compound) {
    return <p>Compound not found!</p>;
  }

  return (
    <div className="container py-5">
      {/* Header Section */}
      <header className="mb-4 text-center">
        <h1 className="display-5 fw-bold color-title">
          {compound.name}
        </h1>
      </header>

      {/* Markdown Content */}
      <div className="bg-light p-4 rounded shadow-sm">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          className="markdown-content"
        />
      </div>

      {/* Footer Section */}
      <footer className="mt-5 text-center">
        <button
          className="btn btn-outline-primary"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </footer>
    </div>
  );
};

export default CompoundDetails;
