"use client";
import Image from "next/image";
import LinkBox from "./link-box";
import { motion } from "framer-motion";
import { li } from "motion/react-client";

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
                icon={link.icon}
              />
            </motion.div>
          );
        })}
    </section>
  );
}

const links: {
  title: string;
  link: string;
  highlighted?: boolean;
  icon?: React.ReactNode;
}[] = [
  {
    title: "Registration - Focșani Tech Challenge League Meet",
    link: "brickbot.ro/meet",
    highlighted: true,
  },
  {
    title: "The Vault Submission Form",
    link: "brickbot.ro/submit-portfolio",
    highlighted: false,
    icon: (
      <div className="h-[var(--icon-size)] w-[var(--icon-size)] p-[0.1rem]">
        <div
          className="w-full h-full"
          style={{
            WebkitMaskImage: "url(/the-vault-icon.svg)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
            maskImage: "url(/the-vault-icon.svg)",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
            backgroundColor: "#9B9B9B",
          }}
        />
      </div>
    ),
  },
];
