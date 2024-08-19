import React, { useState } from 'react';
import { generateCode, generateDescription } from './api';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';

function WebsiteGenerator({ onCodeGeneration }) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const description = await generateDescription(input);
      const generatedCode = await generateCode(description);
      const { html, css } = parseGeneratedCode(generatedCode);
      
      onCodeGeneration(html, css);
    } catch (err) {
      setError('An error occurred while generating the website. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const parseGeneratedCode = (code) => {
    const htmlMatch = code.match(/<html>([\s\S]*?)<\/html>/);
    const cssMatch = code.match(/<style>([\s\S]*?)<\/style>/);
    return {
      html: htmlMatch ? htmlMatch[1].trim() : '',
      css: cssMatch ? cssMatch[1].trim() : ''
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Describe your website and press Enter"
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>Generate</button>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
    </form>
  );
}

export default WebsiteGenerator;