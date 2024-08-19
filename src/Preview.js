import React, { useEffect, useRef } from 'react';

function Preview({ htmlCode, cssCode }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const fullHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
      </html>
    `;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    iframe.src = url;

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [htmlCode, cssCode]);

  return (
    <div className="preview-container">
      <iframe
        ref={iframeRef}
        title="Website Preview"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default Preview;