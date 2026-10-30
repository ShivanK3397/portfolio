"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function ResumeDocument({ url }: { url: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const fallback = <p className="resume-status" role="alert">The résumé could not be displayed. <a href={url} download>Download the PDF instead.</a></p>;

  return <div ref={container} className="resume-pages" aria-label="Résumé pages">
    {width > 0 && <Document
      file={url}
      suspense={false}
      onLoadSuccess={({ numPages }) => setPages(numPages)}
      loading={<p className="resume-status" role="status">Loading résumé…</p>}
      error={fallback}
      externalLinkTarget="_blank"
      externalLinkRel="noopener noreferrer"
    >
      {Array.from({ length: pages }, (_, index) => <Page
        key={index + 1}
        pageNumber={index + 1}
        width={width}
        loading={<p className="resume-status" role="status">Rendering page {index + 1}…</p>}
        error={fallback}
      />)}
    </Document>}
  </div>;
}
