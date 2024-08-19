import React from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor({ language, value, onChange }) {
  return (
    <Editor
      height="300px"
      language={language}
      value={value}
      onChange={onChange}
      theme="vs-dark"
    />
  );
}

export default CodeEditor;