import React, { useState } from 'react';
import WebsiteGenerator from './WebsiteGenerator';
import Preview from './Preview';
import CodeEditor from './CodeEditor';
import './App.css';

function App() {
  const [htmlCode, setHtmlCode] = useState('<div>Your generated website will appear here.</div>');
  const [cssCode, setCssCode] = useState('body { font-family: Arial, sans-serif; }');

  const handleCodeGeneration = (html, css) => {
    setHtmlCode(html);
    setCssCode(css);
  };

  return (
    <div className="app">
      <div className="code-editor">
        <h2>Website Generator</h2>
        <WebsiteGenerator onCodeGeneration={handleCodeGeneration} />
        <h3>HTML</h3>
        <CodeEditor language="html" value={htmlCode} onChange={setHtmlCode} />
        <h3>CSS</h3>
        <CodeEditor language="css" value={cssCode} onChange={setCssCode} />
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <Preview htmlCode={htmlCode} cssCode={cssCode} />
      </div>
    </div>
  );
}

export default App;