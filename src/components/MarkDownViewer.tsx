"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//import Image from "next/image";
import {
  synthwave84,
  okaidia,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MarkDownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="prose-base"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ref, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              style={okaidia}
              language={match[1]}
              PreTag="div"
              ref={null}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        // img: (image) => (
        //   <Image
        //     className="w-full object-cover"
        //     src={image.src || ""}
        //     alt={image.alt || ""}
        //     width={400}
        //     height={350}
        //   />
        // ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
