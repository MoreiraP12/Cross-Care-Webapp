// @ts-nocheck

'use client';

import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { postData } from '../data/posts/postData';

export default class GridDisplay extends Component {
  render() {
    return (
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
              Articles
            </h1>
            <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Our latest posts.
            </h3>
          </div>

          {/* Adjust the grid classes to ensure the responsive grid works */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            {postData.map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-3xl p-4 flex flex-col justify-between"
              >
                <div className="flex justify-center">
                  <Image
                    src={item.imgSrc}
                    alt="Article image"
                    width={300}
                    height={300}
                    style={{ maxWidth: '100%', height: 'auto' }}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold pt-4 sm:pt-6 text-black">
                  {item.heading}
                </h4>
                <h5 className="text-md sm:text-lg md:text-2xl pt-1 text-black">
                  {item.heading2}
                </h5>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-normal pt-4 sm:pt-6 pb-2 opacity-75">
                      {item.authors}
                    </h3>
                    <h3 className="text-sm sm:text-base font-normal pb-1 opacity-75">
                      {item.date}
                    </h3>
                  </div>
                  <div>
                    <Link href={`../blog/${item.slug}`}>
                      <h3 className="bg-black text-white py-2 sm:py-3 px-4 sm:px-5 text-xs sm:text-sm rounded-full">
                        {item.time} read
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
