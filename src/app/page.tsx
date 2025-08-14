"use client";

import Image from "next/image";
import Socials from "./_components/social-links";
import LinkList from "./_components/link-list";
import { motion } from "framer-motion";

export default function Home() {
  const date = new Date();

  return (
    <section className="flex flex-col items-center justify-start w-[var(--content-width)] h-full mt-[var(--top-spacing)] select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full h-full flex flex-col items-center"
      >
        <div className="relative w-full h-[4.5rem] md:h-[5.25rem] lg:h-[6rem] overflow-hidden">
          <Image
            src="brickbot-yellow.svg"
            alt="BrickBot Logo"
            fill
            priority
            fetchPriority="high"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="relative w-full h-[2.5rem] md:h-[3rem] lg:h-[4rem] mt-[var(--related-gap)] overflow-hidden">
          <Image
            src="brickbot-text.svg"
            alt="BrickBot"
            fill
            priority
            fetchPriority="high"
            className="object-contain w-full h-full"
          />
        </div>
        <h1 className="text-[1.75rem]/[1.75rem] lg:text-[2rem]/[2rem] text-[#ffffff] font-semibold mt-[var(--related-gap)]">
          FTC Team #15996
        </h1>
      </motion.div>
      <Socials />
      <LinkList />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="mt-[calc(var(--section-gap)] text-[#9B9B9B]"
        style={{ fontSize: "var(--link-text-size)" }}
      >
        BrickBot © {date.getFullYear()}
      </motion.div>
    </section>
  );
}
