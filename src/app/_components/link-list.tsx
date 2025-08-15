"use client";
import LinkBox from "./link-box";
import { motion } from "framer-motion";

export default function LinkList() {
  return (
    <section className="grid grid-cols-1 grid-flow-row mt-[var(--related-gap)] gap-y-[1rem]">
      {links
        .sort((link1, link2) => {
          return link1.highlighted
            ? link2.highlighted
              ? 0
              : -1
            : link2.highlighted
            ? 1
            : 0;
        })
        .map((link, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: 60 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                visualDuration: 0.4,
                ease: "easeOut",
                type: "spring",
                bounce: 0.35,
                delay: index * 0.1 + 0.2,
              }}
            >
              <LinkBox
                title={link.title}
                link={link.link}
                highlighted={link.highlighted}
              />
            </motion.div>
          );
        })}
    </section>
  );
}

const links: { title: string; link: string; highlighted?: boolean }[] = [
  {
    title: "BrickBot Recruitment Form",
    link: "brickbot.ro/apply",
    highlighted: true,
  },
];
