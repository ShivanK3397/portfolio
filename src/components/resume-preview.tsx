"use client";

import dynamic from "next/dynamic";

const ResumeDocument = dynamic(() => import("./resume-document"), {
  ssr: false,
  loading: () => <p className="resume-status" role="status">Loading résumé…</p>,
});

export function ResumePreview({ url }: { url: string }) {
  return (
    <section className="resume-section" aria-labelledby="resume-title">
      <div className="section-heading">
        <div><p className="eyebrow">Background at a glance</p><h2 id="resume-title">My résumé</h2></div>
        <a className="button" href={url} download>Download résumé <span aria-hidden="true">↓</span></a>
      </div>
      <ResumeDocument url={url} />
    </section>
  );
}
