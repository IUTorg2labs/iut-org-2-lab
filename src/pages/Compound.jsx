import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

//const compounds = await fetch("./compounds.json").then(r => r.json())
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

    console.log(content)

  
    return (
      <div >
        <h1>{compound.name}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
        <Link to="/" style={{ color: 'blue', textDecoration: 'none' }}>
          Back to Home
        </Link>
      </div>
    );
  };
  

export default CompoundDetails;
