// @ts-nocheck

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import FeaturesSection from '../app/features';
import OpenSourceSection from '../app/open_source';
import DemoPlots from '../app/demo_plots';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const IndexPage = () => {
  const [copied, setCopied] = useState(false);
  const citationText =
    '@misc{chen2024crosscare, title={Cross-Care: Assessing the Healthcare Implications of Pre-training Data on Language Model Bias}, author={Shan Chen and Jack Gallifant and Mingye Gao and Pedro Moreira and Nikolaj Munch and Ajay Muthukkumar and Arvind Rajan and Jaya Kolluri and Amelia Fiske and Janna Hastings and Hugo Aerts and Brian Anthony and Leo Anthony Celi and William G. La Cava and Danielle S. Bitterman}, year={2024}, eprint={2405.05506}, archivePrefix={arXiv}, primaryClass={cs.CL}';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(citationText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <>
      {/* Video Background */}
      <div
        className="fixed top-0 left-0 w-full h-full z-[-1] flex justify-center items-center"
        style={{ backgroundColor: 'black' }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '50%',
            height: 'auto',
            maxWidth: '50%',
            objectFit: 'cover',
            marginLeft: '35%',
            marginTop: '10%'
          }}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <section className="flex justify-center items-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-[64rem] w-full gap-4">
          {/* Title on the Left */}
          <div style={{ color: 'white' }} className="flex-1">
            <h1
              className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                WebkitTextStroke: '2px white',
                textStroke: '2px white',
                color: 'transparent'
              }}
            >
              Cross-Care
              <span style={{ WebkitTextStroke: '0px', color: 'white' }}>
                {' '}
                Dataset
              </span>
            </h1>
            <div style={{ paddingRight: '0%' }}>
              <p className="max-w-[42rem] py-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                The Cross-Care Dataset provides comprehensive insights into{' '}
                <span
                  style={{
                    textDecoration: 'underline',
                    textDecorationColor: 'white'
                  }}
                >
                  co-occurrence patterns
                </span>{' '}
                of various diseases. This dataset is invaluable for researchers
                and healthcare professionals seeking to understand complex
                disease interactions and trends.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <button className="py-2 px-8 bg-gray-700 border border-transparent text-sm rounded-full shadow-sm font-medium text-white">
                <Link href="http://arxiv.org/abs/2405.05506">
                  ArXiv Preprint
                </Link>
              </button>

              <button
                onClick={handleCopy}
                className="py-2 px-8 bg-gray-500 text-sm rounded-full shadow-sm font-medium text-white"
              >
                {copied ? 'Copied!' : 'Copy Citation'}
              </button>
            </div>
          </div>

          {/* Social Media Icons on the Right */}
          <div className="flex-1 flex justify-end">
            <div
              className="flex flex-col items-center space-y-2"
              style={{ alignSelf: 'flex-start', paddingBottom: '50%' }}
            >
              <div
                style={{
                  backgroundColor: 'transparent',
                  color: '#E5E4E2',
                  width: '20px'
                }}
              >
                <a
                  href="https://www.linkedin.com/school/harvard-medical-school/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="2x" />{' '}
                </a>
              </div>

              <div
                style={{
                  backgroundColor: 'transparent',
                  color: '#E5E4E2',
                  width: '20px'
                }}
              >
                <a href="https://twitter.com/aim_harvard" target="_blank">
                  <FontAwesomeIcon icon={faXTwitter} size="2x" />{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Demo plots section */}
      <DemoPlots />
      {/* Open Source Section */}
      <OpenSourceSection />
    </>
  );
};

export default IndexPage;
