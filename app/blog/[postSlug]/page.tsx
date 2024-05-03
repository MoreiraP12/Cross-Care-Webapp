// pages/index.js
'use client'

import React from 'react';
import { Card } from '@tremor/react';
import { postData } from '../../data/posts/postData';

function processMarkdown(markdownText) {
  const lines = markdownText.split('\n');
  return lines.map(line => {
    line = line.trim(); // Trim whitespace

    // Handle empty lines
    if (line === '') {
      return '<br />';
    }

    // Process headings and lists
    if (line.startsWith('## ')) {
      return `<h2>${line.substring(3)}</h2>`;
    } else if (line.startsWith('### ')) {
      return `<h3>${line.substring(4)}</h3>`;
    } else if (line.startsWith('- ')) {
      return `<li>${line.substring(2)}</li>`;
    } else {
      // Handle text, links, and bold
      let processedLine = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Convert **text** to <strong>text</strong>
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>'); // Convert [text](url) to <a href="url">text</a>

      // Wrap the line in <p> if it wasn't converted to a header or list item
      return `<p>${processedLine}</p>`;
    }
  }).join('');
}
// React component to render Markdown
const CustomMarkdownRenderer = ({ markdownText }) => {
  const htmlContent = processMarkdown(markdownText);
  
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};


export default function Post({ params }) {
  const post = postData.find((post) => post.slug === params.postSlug);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    
    <section className="flex-col justify-center items-center space-y-6 pb-8 pt-5 md:pb-12 md:pt-5 lg:pb-32 lg:pt-5">
      <div className="flex flex-col items-center px-40">
        <Card>
          <div className="bg-lightgrey py-4" id="blog-section">
            <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
              <div className="text-center mb-4">
                <h1
                  className="font-heading text-2xl sm:text-4xl md:text-7xl lg:text-6xl"
                  style={{
                    WebkitTextStroke: '2px black',
                    textStroke: '2px black',
                    color: 'transparent'
                  }}
                >
                  {post.heading}
                </h1>
                <h3 className="text-4xl sm:text-6xl font-bold">
                  {post.heading2}
                </h3>
                <p>{post.date}</p>
              </div>

              <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
                <h5 className="text-0.5xl sm:text-1xl" style={{ display: 'flex', alignItems: 'center' }}>
                  Written by 
                  <span className="text-0.5xl sm:text-1xl font-bold" style={{ marginLeft: '4px' }}>
                      {post.authors}
                  </span>
                </h5>

                <br />
                <CustomMarkdownRenderer markdownText={post.content} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

