import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer = ({ src }) => (
  <div style={{ height: '600px' }}>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.0/build/pdf.worker.min.js">
      <Viewer fileUrl={src} />
    </Worker>
  </div>
);

export default PdfViewer;