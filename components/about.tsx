"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently pursuing Masters at{" "}
        <span className="font-medium">University of Houston</span>, I discovered
        my love for <span className="font-medium"> programming </span>during my
        undergraduate studies, and since then, I've been on an exciting journey
        of exploration and learning in the world of software development. I
        thrive on challenges and enjoy delving into complex problems to find
        elegant solutions. My time at{" "}
        <span className="font-medium">Manhattan Associates</span> further honed
        my skills and provided me with valuable experience in building scalable
        and robust software solutions. I am also familiar with Python and
        JavaScript. I am always looking to learn new technologies. I am
        currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I like to dance, enjoy playing
        tennis, rock climbing, and working out. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>.
      </p>
    </motion.section>
  );
}
