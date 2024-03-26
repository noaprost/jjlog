import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkDownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown className="prose-base" remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}
