'use client';

import React, { useRef } from 'react';
import { Button_Neon } from './Button_Neon';
import { Fingerprint } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';

const About = () => {
  const textRef = useRef(null);

  // Track scroll position relative to the text block
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 80%', 'end 40%'],
  });

  // Smooth color transition (gray → white)
  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgba(255,255,255,0.35)', 'rgba(255,255,255,1)']
  );

  return (
    <section id='about' className="max-w-7xl mx-auto relative flex flex-col items-center justify-center py-28 px-8 gap-12">

      {/* Top Button */}
      <Button_Neon
        icon={<Fingerprint className="h-5 w-5 text-white" />}
        text="About Us"
        className="w-fit"
      />

      {/* Scroll-animated text */}
      <motion.h2
        ref={textRef}
        style={{ color }}
        className="text-center font-dm text-3xl  lg:text-5xl leading-tighter font-medium max-w-5xl"
      >
        Built on creativity, collaboration, and top excellence, SYNC is a dynamic
        team of industry experts committed to achieving exceptional great results…
      </motion.h2>


      <Button>Book An Appoinment</Button>

    </section>
  );
};

export default About;
