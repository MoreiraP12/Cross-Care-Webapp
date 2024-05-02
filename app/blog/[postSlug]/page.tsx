// @ts-nocheck
import { postData } from '../../data/posts/postData';
import { Card } from '@tremor/react';
import React from 'react';

export default function Post({ params }) {
  const post = postData.find((post) => post.slug === params.postSlug);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  const parseMarkdownHeaders = (text) => {
    // The regex now handles optional leading spaces and ensures there is at least one space after the hash symbols.
    const headerRegex = /^(?:\s*)(#+)\s+(.*)/gm;
    const elements = [];
    let lastIndex = 0;
    let match;
  
    while ((match = headerRegex.exec(text)) !== null) {
      // Text before the header
      const prevText = text.slice(lastIndex, match.index).trim();
      if (prevText) elements.push(<span key={`text-${lastIndex}`}>{prevText}</span>);
  
      const level = match[1].length; // Number of # determines the level of the header
      const content = match[2].trim();
  
      elements.push(React.createElement(`h${level}`, {
        key: `header-${lastIndex}-${level}`,
        className: `text-1.5xl sm:text-1.5xl font-bold`
      }, content));
      
      lastIndex = match.index + match[0].length;
    }
  
    // Remaining text after the last header
    const remainingText = text.slice(lastIndex).trim();
    if (remainingText) elements.push(<span key={`text-${lastIndex}`}>{remainingText}</span>);
  
    return elements;
  };
  

  const createContentElements = (content) => {
    const imgRegex = /!\[.*?\]\((.*?)\)/g;
    const urlRegex = /\[(.*?)\]\((https?:\/\/\S+)\)/g;
    let lastIndex = 0;
    const elements = [];
    let match;

    while ((match = imgRegex.exec(content)) !== null) {
      // Text before the image
      const text = content.slice(lastIndex, match.index);
      elements.push(...parseMarkdownHeaders(text)); // Parse headers in the text
      // Add image element
      elements.push(<img key={`img-${match[1]}`} src={`/${match[1]}`} alt="Embedded Post" className="my-4 max-w-full mx-auto p-2" />);
      lastIndex = match.index + match[0].length;
    }

    // Add any remaining text after the last image
    const remainingText = content.slice(lastIndex);
    elements.push(...parseMarkdownHeaders(remainingText));

    return elements;
  };

  const contentElements = createContentElements(post.content);
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
                <article>
                  {contentElements}
                </article>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
