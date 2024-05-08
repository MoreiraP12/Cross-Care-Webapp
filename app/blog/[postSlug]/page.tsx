//@ts-nocheck
'use client';

import React from 'react';
import { Card } from '@tremor/react';
import { postData } from '../../data/posts/postData';

function processMarkdown(markdownText) {
  const lines = markdownText.split('\n');
  return lines
    .map((line) => {
      line = line.trim(); // Trim whitespace

      // Handle empty lines
      if (line === '') {
        return '<br />';
      }

      // Handle inline formatting
      line = line
        .replace(
          /!\[(.*?)\]\((.*?)\)\s*"_([^"]*)_"$/g,
          '<figure><img class="my-4 max-w-full mx-auto p-2 rounded-lg shadow-lg" style="max-width: 100%; height: auto;" src="$2" alt="$1" /><figcaption class="text-center mt-2 italic opacity-75">$3</figcaption></figure>'
        ) // Convert images with captions
        .replace(
          /!\[(.*?)\]\((.*?)\)/g,
          '<img class="my-4 max-w-full mx-auto p-2 rounded-lg shadow-lg" style="max-width: 100%; height: auto;" src="$2" alt="$1" />'
        ) // Convert images without captions
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Convert bold
        .replace(
          /\[(.*?)\]\((.*?)\)/g,
          '<a class="text-blue-600 hover:underline" href="$2">$1</a>'
        ); // Convert links

      // Now handle block elements
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold my-4">${line.substring(
          3
        )}</h2>`;
      } else if (line.startsWith('### ')) {
        return `<h3 class="text-xl sm:text-2xl md:text-3xl font-bold my-4">${line.substring(
          4
        )}</h3>`;
      } else if (line.startsWith('- ')) {
        return `<li>${line.substring(2)}</li>`;
      } else {
        // Wrap remaining text in <p> tags if it wasn't a header, list item, or doesn't contain an image or figure
        return line.includes('<img') || line.includes('<figure')
          ? line
          : `<p class="my-4 text-justify">${line}</p>`;
      }
    })
    .join('');
}

// React component to render Markdown
const CustomMarkdownRenderer = ({ markdownText }) => {
  const htmlContent = processMarkdown(markdownText);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default function Post({ params }) {
  const post = postData.find((post) => post.slug === params.postSlug);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <section className="flex flex-col justify-center items-center space-y-6 pb-8 pt-5 md:pb-12 md:pt-5 lg:pb-32 lg:pt-5">
      <div className="flex flex-col items-center px-4 sm:px-10 md:px-20 lg:px-40">
        <Card className="w-full p-8 lg:p-12">
          <div className="bg-lightgrey py-4" id="blog-section">
            <div className="mx-auto max-w-4xl sm:py-4 lg:px-8">
              <div className="text-center mb-4">
                <h1
                  className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                  style={{
                    WebkitTextStroke: '2px black',
                    textStroke: '2px black',
                    color: 'transparent'
                  }}
                >
                  {post.heading}
                </h1>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold opacity-75">
                  {post.heading2}
                </h3>
                <p className="text-md sm:text-lg opacity-75">{post.date}</p>
              </div>

              <div className="mx-auto max-w-4xl sm:py-4 lg:px-8">
                <h5 className="text-md sm:text-lg flex items-center font-normal opacity-75 mb-4">
                  Written by{' '}
                  <span
                    className="font-bold ml-2 text-md sm:text-lg"
                    style={{ marginLeft: '4px' }}
                  >
                    {post.authors}
                  </span>
                </h5>

                <CustomMarkdownRenderer markdownText={post.content} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
